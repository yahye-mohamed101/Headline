import express from 'express';
import type { Request, Response } from 'express';
import { Article } from '../../models/index.js';

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
router.get('/article', async (_req: Request, res: Response) => {
    try {
        const articles = await Article.findAll();
        res.json(articles)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    };
});