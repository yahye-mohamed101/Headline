import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

export interface ArticleAttributes {
    status: string;
    totalResults: number;
    articles: {
        source: {
            id: string;
            name: string;
        },
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }[];
};

interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'articles'> { };

export class Article extends Model<ArticleAttributes, ArticleCreationAttributes>
    implements ArticleAttributes {
    public status: string;
    public totalResults: number;
    public articles: {
        source: {
            id: string;
            name: string;
        },
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }[];

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

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
            articles: {
                source: {
                    id: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    name: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    }
                },
                author: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                url: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                urlToImage: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                publishedAt: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
        },
        {
            sequelize,
            tableName: 'articles',
            timestamps: true, // Sequelize will automatically create 'createdAt' and 'updatedAt' columns
        }
    );
    return Article;
}
