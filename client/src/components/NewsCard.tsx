import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ExternalLink } from 'lucide-react';
import { Article } from '../interfaces/HeadlineIF';

interface NewsCardProps {
    article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
    const { source, author, title, description, url, urlToImage, publishedAt } = article;

    return (
        <Card className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative">
                {urlToImage ? (
                    <img 
                        src={urlToImage} 
                        alt={title} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                    </div>
                )}
                <Badge className="absolute top-4 right-4 bg-blue-600">
                    {source?.name || 'News'}
                </Badge>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <time>{new Date(publishedAt).toLocaleDateString()}</time>
                    </div>
                    {author && (
                        <div className="flex items-center gap-1">
                            <User size={16} />
                            <span className="truncate">{author}</span>
                        </div>
                    )}
                </div>
                
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Read More
                    <ExternalLink size={16} />
                </a>
            </div>
        </Card>
    );
};

export default NewsCard;