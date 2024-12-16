import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

// Define the interface for the nested source object
interface Source {
    id: string | null; // Identifier of the source (nullable)
    name: string; // Display name of the source
}

// Define the attributes for an individual article
interface ArticleDetails {
    source: Source; // Nested source object
    author: string | null; // Author of the article (nullable)
    title: string; // Title of the article
    description: string | null; // Snippet or description (nullable)
    url: string; // Direct URL to the article
    urlToImage: string | null; // URL to a relevant image (nullable)
    publishedAt: string; // Publication date (ISO format)
    content: string | null; // Article content (nullable)
}

// Define the attributes for the main Article model
export interface ArticleAttributes {
    status: string; // Status of the API response (e.g., "ok" or "error")
    totalResults: number; // Total number of results available
    articles: ArticleDetails[]; // Array of article details
}

// Define the creation attributes (all required except `articles`)
interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'articles'> { }

// Define the Article class
export class Article extends Model<ArticleAttributes, ArticleCreationAttributes>
    implements ArticleAttributes {
    public status!: string;
    public totalResults!: number;
    public articles!: ArticleDetails[];

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Factory function to initialize the Article model
export function ArticleFactory(sequelize: Sequelize): typeof Article {
    Article.init(
        {
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
        },
        {
            sequelize,
            tableName: 'articles',
            timestamps: true, // Add `createdAt` and `updatedAt` columns
        }
    );

    return Article;
}
