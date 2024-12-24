import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-gray-900" aria-label="Go to NewsHub homepage">
                        NewsHub
                    </Link>
                    <div className="space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-gray-900" aria-label="Go to homepage">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900" aria-label="About NewsHub">
                            About
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
