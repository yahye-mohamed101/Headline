import React from 'react';
import NewsCard from './NewsCard';
import type { Article } from '../interfaces/HeadlineIF';
import '../assets/NewsList.css'

interface NewsListProps {
  articles: Article[];
  loading?: boolean;
}

const NewsCardSkeleton = () => (
  <div className="skeleton skeleton__card">
    <div className="skeleton__image" />
    <div className="skeleton__content">
      <div className="skeleton skeleton__title" />
      <div className="skeleton skeleton__text" />
      <div className="skeleton skeleton__text" />
      <div className="skeleton skeleton__text" />
    </div>
  </div>
);

const NewsList: React.FC<NewsListProps> = ({ articles, loading = false }) => {
  if (loading) {
    return (
      <div className="news-grid">
        {[...Array(6)].map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="news-grid">
        <div className="news-grid__empty">
          <p>No articles found. Try adjusting your search or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <NewsCard key={`${article.title}-${index}`} article={article} />
      ))}
    </div>
  );
};

export default NewsList;