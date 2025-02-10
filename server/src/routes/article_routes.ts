import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { Article } from '../models/index.js';
import { fetchLatestNews, fetchNewsByCategory } from '../api/newsApiService.js';

const router = express.Router();

type RouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const getArticles: RouteHandler = async (req, res, next) => {
    try {
        console.log('Received request with query:', req.query);

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const category = (req.query.category as string)?.toLowerCase();

        console.log('Processing request with:', { page, limit, category });

        let newsData;
        try {
            if (category && category !== 'all') {
                newsData = await fetchNewsByCategory(category, page, limit);
            } else {
                newsData = await fetchLatestNews(page, limit);
            }
            console.log('NewsAPI response:', newsData);
        } catch (error) {
            console.error('NewsAPI error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown NewsAPI error';
            throw new Error(`NewsAPI error: ${errorMessage}`);
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

        try {
            await Article.create({
                status: newsData.status,
                totalResults: newsData.totalResults,
                articles: newsData.articles
            });
        } catch (error) {
            console.error('Database error:', error);
            // Don't fail the request if database storage fails
        }

        res.json({
            status: 'success',
            totalResults: newsData.totalResults,
            totalPages: Math.ceil(newsData.totalResults / limit),
            currentPage: page,
            articles: newsData.articles
        });
    } catch (error) {
        console.error('Route error:', error);
        next(error);
    }
};

router.get('/article', getArticles);

export default router;