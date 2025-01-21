import express from 'express';
import type { Request, Response } from 'express';
import { Article } from '../models/index.js';
import { fetchLatestNews, fetchNewsByCategory } from '../api/newsApiService';

const router = express.Router();

// GET endpoint to retrieve all articles
router.get('/article', async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const category = req.query.category as string;

    try {
        let newsData;
        if (category && category !== 'All') {
            newsData = await fetchNewsByCategory(category, page, limit);
        } else {
            newsData = await fetchLatestNews(page, limit);
        }

        // Store the fetched articles in the database
        await Article.create({
            status: newsData.status,
            totalResults: newsData.totalResults,
            articles: newsData.articles
        });

        res.json({
            totalResults: newsData.totalResults,
            totalPages: Math.ceil(newsData.totalResults / limit),
            currentPage: page,
            articles: newsData.articles
        });
    } catch (error: any) {
        console.error('Error handling articles:', error);
        res.status(500).json({ message: error.message });
    }
});

// Other routes remain the same...

export default router;