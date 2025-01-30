interface FilterProps {
    onFilterChange: (category: string) => void;
    selectedCategory: string;
  }
  
  export const Filter = ({ onFilterChange, selectedCategory }: FilterProps) => {
    const categories = [
      { id: 'all', label: 'All', icon: '📰' },
      { id: 'technology', label: 'Technology', icon: '💻' },
      { id: 'business', label: 'Business', icon: '💼' },
      { id: 'sports', label: 'Sports', icon: '⚽' },
      { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
      { id: 'science', label: 'Science', icon: '🔬' },
      { id: 'health', label: 'Health', icon: '🏥' },
    ];
  
    return (
      <div className="w-full overflow-x-auto py-4">
        <div className="flex space-x-2 min-w-max px-4">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => onFilterChange(id)}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-full
                font-medium text-sm transition-all duration-300 ease-in-out
                ${
                  selectedCategory === id
                    ? 'bg-blue-600 text-white shadow-lg transform hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }
              `}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };