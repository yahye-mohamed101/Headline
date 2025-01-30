import { Clock, User, ExternalLink } from 'lucide-react';
import { Article } from '../interfaces/HeadlineIF';

const NewsCard = ({ article }: { article: Article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600">No image available</span>
          </div>
        )}
        <span className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm">
          {source?.name || 'News'}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <time>{new Date(publishedAt).toLocaleDateString()}</time>
            </div>
            {author && (
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span className="truncate">{author}</span>
              </div>
            )}
          </div>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Read More</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;