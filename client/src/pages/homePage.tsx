import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Filter } from '../components/Filter';
import NewsList from '../components/NewsList';
import { Loading } from '../components/Loading';
import { fetchNews } from '../utils/newsService';
import type { Article } from '../interfaces/HeadlineIF';

export const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchNews(selectedCategory);
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [selectedCategory]); // Re-fetch when category changes

  const filteredArticles = articles.filter(article => {
    const matchesCategory =
      selectedCategory === 'all' ||
      article.source?.name?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      article.category?.toLowerCase() === selectedCategory.toLowerCase();
      
    const matchesSearch =
      !searchQuery ||
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-600 text-center">
          <p>Error loading articles: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchQuery} />
      <Filter onFilterChange={setSelectedCategory} selectedCategory={selectedCategory} />
      {loading ? (
        <Loading />
      ) : (
        <NewsList articles={filteredArticles} />
      )}
    </div>
  );
};