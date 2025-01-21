import { useEffect, useState } from "react";
import { fetchNews, fetchSources } from "../utils/newsService.tsx";
import { Article } from "../interfaces/HeadlineIF.tsx";
import "../assets/NewsFeed.css";

const NewsFeed = () => {
    const [news, setNews] = useState<Article[]>([]);  // Type the news state as an array of Article
  const [sources, setSources] = useState<{ id: string; name: string }[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newsData = await fetchNews();
      const sourcesData = await fetchSources();
      setNews(newsData);
      setSources(sourcesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="news-feed">
      <header className="header">
        <h1 className="app-title">Headline</h1>
        <p className="subtitle">Your trusted news aggregator</p>
      </header>
      <div className="content">
        <div className="sources">
          <h2>Sources</h2>
          <ul className="source-list">
            {sources.map((source) => (
              <li key={source.id} className="source-item">
                {source.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="news">
          <h2>Latest News</h2>
          <ul className="news-list">
            {news.map((article) => (
              <li key={article.id} className="news-item">
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
