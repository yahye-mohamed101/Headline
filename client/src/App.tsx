import React from 'react';
import ArticleList from './components/ArticleList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>News Articles</h1>
            </header>
            <main>
                <ArticleList />
            </main>
        </div>
    );
}

export default App;