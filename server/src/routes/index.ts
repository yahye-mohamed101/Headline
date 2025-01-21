import { Router } from 'express';
import articleRoutes from "./article_routes.js";

const router = Router();

// Use articleRoutes directly without additional /article prefix
router.use(articleRoutes);

export default router;