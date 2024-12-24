// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Calendar, ExternalLink } from 'lucide-react';

// interface Article {
//   source: {
//     id: string | null;
//     name: string;
//   };
//   author: string | null;
//   title: string;
//   description: string | null;
//   url: string;
//   urlToImage: string | null;
//   publishedAt: string;
//   content: string | null;
// }

// interface ArticleResponse {
//   status: string;
//   totalResults: number;
//   articles: Article[];
// }

// const NewsApp = () => {
//   const [articles, setArticles] = useState<ArticleResponse[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch('/api/article');
//         if (!response.ok) {
//           throw new Error('Failed to fetch articles');
//         }
//         const data = await response.json();
//         setArticles(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, i) => (
//           <Card key={i} className="w-full">
//             <CardHeader>
//               <Skeleton className="h-4 w-3/4" />
//               <Skeleton className="h-4 w-1/2" />
//             </CardHeader>
//             <CardContent>
//               <Skeleton className="h-32 w-full" />
//             </CardContent>
//             <CardFooter>
//               <Skeleton className="h-4 w-1/4" />
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto p-4">
//         <Alert variant="destructive">
//           <AlertDescription>
//             Failed to load articles: {error}
//           </AlertDescription>
//         </Alert>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-sm py-6 mb-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
//           <p className="text-gray-500 mt-2">Stay updated with the latest articles</p>
//         </div>
//       </header>

//       <main className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.flatMap(response => 
//             response.articles.map((article, index) => (
//               <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
//                 {article.urlToImage && (
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <img
//                       src={article.urlToImage}
//                       alt={article.title}
//                       className="object-cover w-full h-full"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.src = '/api/placeholder/400/320';
//                       }}
//                     />
//                   </div>
//                 )}
//                 <CardHeader>
//                   <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
//                     <span>{article.source.name}</span>
//                     {article.author && (
//                       <>
//                         <span>•</span>
//                         <span>{article.author}</span>
//                       </>
//                     )}
//                   </div>
//                   <CardTitle className="text-xl font-bold line-clamp-2">
//                     {article.title}
//                   </CardTitle>
//                   <CardDescription className="line-clamp-3">
//                     {article.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <p className="line-clamp-4 text-gray-600">
//                     {article.content}
//                   </p>
//                 </CardContent>
//                 <CardFooter className="flex justify-between items-center">
//                   <div className="flex items-center text-sm text-gray-500">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </div>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-blue-600 hover:text-blue-800"
//                   >
//                     Read more
//                     <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </CardFooter>
//               </Card>
//             ))
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewsApp;

import React from 'react';
import './NewsCard.css';
import { Article } from '../interfaces/HeadlineIF';

interface NewsCardProps {
    article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
    const { source, author, title, description, url, urlToImage, publishedAt } = article;

    return (
        <div className="article-card bg-white shadow-lg rounded-lg overflow-hidden">
            {urlToImage && <img src={urlToImage} alt={title} className="article-image w-full h-48 object-cover" />}
            <div className="article-content p-4">
                <h3 className="article-title text-xl font-semibold text-gray-800">{title}</h3>
                <p className="article-source text-gray-600">Source: {source?.name || 'Unknown'}</p>
                <p className="article-author text-gray-600">By {author || 'Anonymous'}</p>
                <p className="article-description text-gray-700">{description}</p>
                <p className="article-date text-gray-500">Published on: {new Date(publishedAt).toLocaleString()}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="article-link text-blue-600 hover:underline">Read More</a>
            </div>
        </div>
    );
};

export default NewsCard;
