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
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Categories</h2>
            <div className="flex flex-wrap gap-3">
                {categories.map(({ id, label, icon }) => (
                    <button
                        key={id}
                        onClick={() => onFilterChange(id)}
                        className={`
                            flex items-center space-x-2 px-4 py-2 rounded-full
                            transition-all duration-300 ease-in-out
                            ${selectedCategory === id
                                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                            }
                        `}
                    >
                        <span>{icon}</span>
                        <span>{label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};