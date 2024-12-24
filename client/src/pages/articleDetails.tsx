import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Article } from '../interfaces/HeadlineIF';

export const ArticleDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/article/${id}`);
                if (!response.ok) throw new Error('Article not found');
                const data = await response.json();
                setArticle(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">{error}</div>;
    if (!article) return <div>Article not found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            {article.urlToImage && (
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-96 object-cover rounded-lg mb-8"
                />
            )}
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
                <span>{article.source.name}</span>
                {article.author && (
                    <>
                        <span className="mx-2">•</span>
                        <span>{article.author}</span>
                    </>
                )}
                <span className="mx-2">•</span>
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="prose max-w-none">
                <p className="text-xl mb-6">{article.description}</p>
                <div className="whitespace-pre-line">{article.content}</div>
            </div>
        </div>
    );
};
