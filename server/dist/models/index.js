import sequelize from '../config/connection.js';
import { ArticleFactory } from './article.js';
// Initialize models
const Article = ArticleFactory(sequelize);
// Export models
export { Article };
