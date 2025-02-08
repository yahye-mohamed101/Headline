import express from 'express';
import { Article } from '../models/index.js';
import { fetchLatestNews, fetchNewsByCategory } from '../api/newsApiService.js';
const router = express.Router();
// GET endpoint to retrieve all articles
const getArticles = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const category = req.query.category;
        console.log('Received request for category:', category); // Debug log
        let newsData;
        if (category && category !== 'all') {
            newsData = await fetchNewsByCategory(category, page, limit);
        }
        else {
            newsData = await fetchLatestNews(page, limit);
        }
        // Debug log
        console.log(`Fetched ${newsData.articles?.length || 0} articles`);
        if (!newsData?.articles || newsData.articles.length === 0) {
            res.status(404).json({
                status: 'error',
                message: 'No articles found for the specified criteria',
                articles: [],
                totalResults: 0,
                currentPage: page,
                totalPages: 0
            });
            return;
        }
        // Store in database if needed
        await Article.create({
            status: newsData.status,
            totalResults: newsData.totalResults,
            articles: newsData.articles
        });
        res.json({
            status: 'success',
            totalResults: newsData.totalResults,
            totalPages: Math.ceil(newsData.totalResults / limit),
            currentPage: page,
            articles: newsData.articles
        });
    }
    catch (error) {
        console.error('Error in getArticles:', error);
        next(error);
    }
};
// Register routes
router.get('/article', getArticles);
export default router;
