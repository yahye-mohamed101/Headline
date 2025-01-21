import React from 'react';
import NewsCard from '../components/NewsCard.tsx';
import '../assets/NewsList.css';
import type { Article } from '../interfaces/HeadlineIF';

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <NewsCard key={article.id ?? index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
