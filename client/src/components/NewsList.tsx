import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard.tsx';
import './NewsList.css';


const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`/api/article?page=${page}&limit=10`)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                setTotalPages(data.totalPages);
            })
            .catch((error) => console.error('Error fetching articles:', error));
    }, [page]);

    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
            <div className="pagination flex justify-between items-center mt-8">
                <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};


export default NewsList;



