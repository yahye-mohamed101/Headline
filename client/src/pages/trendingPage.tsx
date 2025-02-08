import { useState, useEffect } from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { fetchNews } from '../utils/newsService';
import { Loading } from '../components/Loading';
import { Article } from '../interfaces/HeadlineIF';
import '../assets/TrendingPage.css';

export const TrendingPage = () => {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrendingArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchNews();
        // Sort articles by publishedAt to get the most recent ones
        const sortedArticles = data.sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setTrendingArticles(sortedArticles.slice(0, 10)); // Get top 10 articles
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadTrendingArticles();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="trending__error">
        <p>Error loading trending articles: {error}</p>
        <button onClick={() => window.location.reload()} className="trending__retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="trending">
      <div className="trending__header">
        <h1 className="trending__title">
          <TrendingUp className="trending__icon" />
          Trending News
        </h1>
        <p className="trending__subtitle">Top stories making headlines right now</p>
      </div>

      <div className="trending__content">
        {trendingArticles.map((article, index) => (
          <article key={article.url} className="trending__article">
            <div className="trending__rank">{index + 1}</div>
            
            <div className="trending__article-content">
              <div className="trending__article-header">
                <span className="trending__source">{article.source.name}</span>
                <div className="trending__time">
                  <Clock className="trending__time-icon" />
                  <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                </div>
              </div>

              <h2 className="trending__article-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>

              {article.description && (
                <p className="trending__article-description">
                  {article.description}
                </p>
              )}

              <div className="trending__article-footer">
                {article.author && (
                  <span className="trending__author">By {article.author}</span>
                )}
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="trending__read-more"
                >
                  Read Full Article
                </a>
              </div>
            </div>

            {article.urlToImage && (
              <div className="trending__article-image">
                <img src={article.urlToImage} alt={article.title} />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};