import { useEffect, useState } from "react";
import { fetchNews } from "../utils/newsService";
import { Article } from "../interfaces/HeadlineIF";
import { Loading } from "./Loading";
import "../assets/NewsFeed.css";

interface Source {
  id: string;
  name: string;
}

const NewsFeed = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newsData = await fetchNews();
        setNews(newsData);
        
        // Fetch sources from your backend API
        const sourcesResponse = await fetch('http://localhost:3001/api/sources');
        const sourcesData = await sourcesResponse.json();
        setSources(sourcesData.sources || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

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