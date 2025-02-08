import '../assets/Filter.css'

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
    <div className="filter-container">
      <div className="filter-scroll">
        {categories.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`filter-button ${selectedCategory.toLowerCase() === id ? 'filter-button--active' : ''}`}
          >
            <span className="filter-button__icon">{icon}</span>
            <span className="filter-button__label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};