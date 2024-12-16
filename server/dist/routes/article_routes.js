import express from 'express';
import { Article } from '../models/index.js';
const router = express.Router();
//POST endpoint to create a new article
router.post('/article', async (req, res) => {
    const { status, totalResults, articles } = req.body;
    try {
        const newArticle = await Article.create({ status, totalResults, articles });
        res.status(201).json(newArticle);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//GET endpoint to retrieve all articles 
router.get('/article', async (_req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    ;
});
router.get('/article/:id', async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            res.json(article);
        }
        else {
            res.status(404).json({ message: 'Article not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
