import { Link } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2" aria-label="Go to NewsHub homepage">
                        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 20H5V4H7V13H17V4H19V20Z"/>
                        </svg>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            NewsHub
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link to="/trending" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Trending
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                            <Link to="/trending" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Trending
                            </Link>
                            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};