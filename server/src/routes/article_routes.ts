import express from 'express';
import type { Request, Response } from 'express';
import { Article } from '../models/index.js';

const router = express.Router();

//POST endpoint to create a new article
router.post('/article', async (req: Request, res: Response) => {
    const { status, totalResults, articles } = req.body;
    try {
        const newArticle = await Article.create({ status, totalResults, articles });
        res.status(201).json(newArticle);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//GET endpoint to retrieve all articles 
router.get('/article', async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const articles = await Article.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        res.json({
            totalResults: articles.count,
            totalPages: Math.ceil(articles.count / limit),
            currentPage: page,
            articles: articles.rows,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});



router.get('/article/:id', async (req: Request, res: Response) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message }); 
    }
});

export default router