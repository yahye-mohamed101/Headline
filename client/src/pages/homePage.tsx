import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar.tsx';
import { Filter } from '../components/Filter.tsx';
import  NewsList  from '../components/NewsList.tsx';
import type { ArticleResponse, Article } from '../interfaces/HeadlineIF';  // Ensure correct import

export const HomePage = () => {
  const [articles, setArticles] = useState<ArticleResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/article');
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles: Article[] = articles.flatMap(response =>
    response.articles.filter(article => {
      const matchesCategory =
        selectedCategory === 'All' || article.source.name.includes(selectedCategory);
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      return matchesCategory && matchesSearch;
    })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchQuery} />
      <Filter onFilterChange={setSelectedCategory} selectedCategory={selectedCategory} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <NewsList articles={filteredArticles} />  // Ensure you are passing 'articles' as the prop
      )}
    </div>
  );
};
