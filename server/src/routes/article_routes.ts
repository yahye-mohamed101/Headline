import express, { Request, Response, NextFunction } from 'express';
import { Article } from '../models/index.js';
import { fetchLatestNews, fetchNewsByCategory } from '../api/newsApiService.js';

const router = express.Router();

// Define the route handler type
type RouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

// GET endpoint to retrieve all articles
const getArticles: RouteHandler = async (req, res, next) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const category = (req.query.category as string)?.toLowerCase();

    try {
        let newsData;
        if (category && category !== 'all') {
            newsData = await fetchNewsByCategory(category, page, limit);
        } else {
            newsData = await fetchLatestNews(page, limit);
        }

        // Handle empty results
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

        // Store the fetched articles in the database
        await Article.create({
            status: newsData.status,
            totalResults: newsData.totalResults,
            articles: newsData.articles
        });

        // Send successful response
        res.json({
            status: 'success',
            totalResults: newsData.totalResults,
            totalPages: Math.ceil(newsData.totalResults / limit),
            currentPage: page,
            articles: newsData.articles.map(article => ({
                ...article,
                category: category || 'general'
            }))
        });
    } catch (error: any) {
        next(error);
    }
};

// GET endpoint to retrieve a single article by ID
const getArticleById: RouteHandler = async (req, res, next) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            res.status(404).json({
                status: 'error',
                message: 'Article not found'
            });
            return;
        }
        res.json(article);
    } catch (error) {
        next(error);
    }
};

// Register routes
router.get('/article', getArticles);
router.get('/article/:id', getArticleById);

export default router;