import { Clock, User, ExternalLink } from 'lucide-react';
import { Article } from '../interfaces/HeadlineIF';
import '../assets/NewsCard.css';

const NewsCard = ({ article }: { article: Article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className="news-card__image"
          />
        ) : (
          <div className="news-card__no-image">
            <span>No image available</span>
          </div>
        )}
        <span className="news-card__source-badge">
          {source?.name || 'News'}
        </span>
      </div>
      
      <div className="news-card__content">
        <h3 className="news-card__title">
          {title}
        </h3>
        
        <p className="news-card__description">
          {description}
        </p>
        
        <div className="news-card__metadata">
          <div className="news-card__metadata-item">
            <Clock />
            <time>{new Date(publishedAt).toLocaleDateString()}</time>
          </div>
          {author && (
            <div className="news-card__metadata-item">
              <User />
              <span>{author}</span>
            </div>
          )}
        </div>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card__link"
        >
          <span>Read More</span>
          <ExternalLink />
        </a>
      </div>
    </article>
  );
};

export default NewsCard;