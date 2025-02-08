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
        setError(null);
        const data = await fetchNews(selectedCategory);
        setArticles(data);
      } catch (err) {
        console.error('Error loading articles:', err);
        setError(err instanceof Error ? err.message : 'An error occurred loading articles');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [selectedCategory]); // Re-fetch when category changes

  const filteredArticles = articles.filter(article => {
    const matchesSearch =
      !searchQuery ||
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-600 text-center">
          <p>Error loading articles: {error}</p>
          <button 
            onClick={() => setSelectedCategory('all')} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchQuery} />
      <Filter onFilterChange={handleCategoryChange} selectedCategory={selectedCategory} />
      {loading ? (
        <Loading />
      ) : (
        <NewsList articles={filteredArticles} />
      )}
    </div>
  );
};