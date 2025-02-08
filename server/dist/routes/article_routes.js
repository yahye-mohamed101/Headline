import express from 'express';
import { Article } from '../models/index.js';
import { fetchLatestNews, fetchNewsByCategory, fetchSources } from '../api/newsApiService.js';
const router = express.Router();
// GET endpoint to retrieve all articles
const getArticles = async (req, res, next) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const category = req.query.category?.toLowerCase();
    try {
        let newsData;
        if (category && category !== 'all') {
            newsData = await fetchNewsByCategory(category, page, limit);
        }
        else {
            newsData = await fetchLatestNews(page, limit);
        }
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
        next(error);
    }
};
// GET endpoint to retrieve sources
const getSources = async (_req, res, next) => {
    try {
        const sourcesData = await fetchSources();
        res.json(sourcesData);
    }
    catch (error) {
        next(error);
    }
};
// Register routes
router.get('/article', getArticles);
router.get('/sources', getSources);
export default router;
