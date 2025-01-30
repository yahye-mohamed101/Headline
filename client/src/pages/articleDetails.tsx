import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Loading } from '../components/Loading';
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

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description || undefined,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  if (loading) return <Loading />;
  if (error) return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
  if (!article) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to News
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
          {article.source?.name && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                         px-3 py-1 rounded-full text-sm">
              {article.source.name}
            </span>
          )}
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          </div>

          {article.author && (
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
          )}

          <button
            onClick={handleShare}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 
                     dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
        </div>
      </header>

      {/* Article Image */}
      {article.urlToImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        {article.description && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {article.description}
          </p>
        )}
        
        {article.content && (
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {article.content}
          </div>
        )}
      </div>

      {/* Read More Link */}
      {article.url && (
        <div className="mt-8 text-center">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                     text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                     transition-colors duration-200"
          >
            Read Full Article
          </a>
        </div>
      )}
    </article>
  );
};