import { useEffect, useState } from "react";
import { fetchNews } from "../utils/newsService";
import { Article } from "../interfaces/HeadlineIF";
import { Loading } from "../components/Loading";
import "../assets/NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newsData = await fetchNews();
        setNews(newsData.articles); // Access the articles property from the response
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="news-feed__error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="news-feed">
      <header className="header">
        <h1 className="app-title">Headline</h1>
        <p className="subtitle">Your trusted news aggregator</p>
      </header>
      <div className="content">
        <div className="news">
          <h2>Latest News</h2>
          <ul className="news-list">
            {news.map((article, index) => (
              <li key={`${article.title}-${index}`} className="news-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  <h3 className="news-title">{article.title}</h3>
                </a>
                <p className="news-description">{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;