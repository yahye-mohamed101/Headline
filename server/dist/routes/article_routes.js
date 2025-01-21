import express from 'express';
import { Article } from '../models/index.js';
const router = express.Router();
// POST endpoint to create a new article
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
// GET endpoint to retrieve all articles
router.get('/article', async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    try {
        const articles = await Article.findAndCountAll({
            limit,
            offset,
        });
        // Transform the data to match the expected format
        const transformedArticles = articles.rows.flatMap(article => article.get({ plain: true }).articles || []);
        res.json({
            totalResults: transformedArticles.length,
            totalPages: Math.ceil(transformedArticles.length / limit),
            currentPage: page,
            articles: transformedArticles
        });
    }
    catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ message: error.message });
    }
});
// GET endpoint to retrieve an article by ID
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
