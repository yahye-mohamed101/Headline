
interface FilterProps {
    onFilterChange: (category: string) => void;
    selectedCategory: string;
}

export const Filter = ({ onFilterChange, selectedCategory }: FilterProps) => {
    const categories = ['All', 'Technology', 'Business', 'Sports', 'Entertainment', 'Science'];

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    aria-label={`Filter by ${category}`}
                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                        selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
