import { useState } from 'react';
import { Search, X } from 'lucide-react';

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
    <div className="max-w-2xl mx-auto px-4 w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`
          relative rounded-full shadow-sm transition-all duration-300
          ${isFocused ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        `}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for news articles..."
            className="block w-full pl-10 pr-12 py-3 border-gray-200 rounded-full focus:outline-none
                     bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white
                     placeholder-gray-500 dark:placeholder-gray-400"
          />

          {query && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};