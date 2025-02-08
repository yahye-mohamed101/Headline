import { useState } from 'react';
import { Search, X } from 'lucide-react';
import '../assets/SearchBar.css'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <div className={`search__input-container ${isFocused ? 'search__input-container--focused' : ''}`}>
          <Search className="search__icon" />
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for news articles..."
            className="search__input"
          />

          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="search__clear"
            >
              <X />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};