import { DataTypes, Model } from 'sequelize';
// Define the Article class
export class Article extends Model {
}
// Factory function to initialize the Article model
export function ArticleFactory(sequelize) {
    Article.init({
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalResults: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // Store articles as a JSONB array
        articles: {
            type: DataTypes.JSONB,
            allowNull: true, // Articles can be null in case of an error response
        },
    }, {
        sequelize,
        tableName: 'articles',
        timestamps: true, // Add `createdAt` and `updatedAt` columns
    });
    return Article;
}
