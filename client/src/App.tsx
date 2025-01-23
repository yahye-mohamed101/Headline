import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage.tsx';
import { AboutPage } from './pages/aboutPage.tsx';
import { ArticleDetails } from './pages/articleDetails.tsx';
import { ErrorPage } from './pages/errorPage.tsx';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                    <Routes>
                        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/article/:id" element={<ArticleDetails />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;