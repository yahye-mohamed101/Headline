import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">NewsHub</h3>
                        <p className="text-gray-300">
                            Your trusted source for the latest news and updates.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-300">
                            Email: info@newshub.com<br />
                            Phone: (555) 123-4567
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-300">© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
