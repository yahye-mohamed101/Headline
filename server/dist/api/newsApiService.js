import NewsAPI from 'newsapi';
if (!process.env.NEWS_API_KEY) {
    throw new Error('NEWS_API_KEY must be defined in environment variables');
}
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
export const fetchLatestNews = async (page = 1, pageSize = 20) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            language: 'en',
            page,
            pageSize
        });
        return {
            status: response.status,
            totalResults: response.totalResults,
            articles: response.articles
        };
    }
    catch (error) {
        console.error('Error fetching news from API:', error);
        throw error;
    }
};
export const fetchNewsByCategory = async (category, page = 1, pageSize = 20) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            category,
            language: 'en',
            page,
            pageSize
        });
        return {
            status: response.status,
            totalResults: response.totalResults,
            articles: response.articles
        };
    }
    catch (error) {
        console.error('Error fetching category news from API:', error);
        throw error;
    }
};
export const fetchSources = async () => {
    try {
        const response = await newsapi.v2.sources({
            language: 'en'
        });
        return {
            status: response.status,
            sources: response.sources
        };
    }
    catch (error) {
        console.error('Error fetching sources from API:', error);
        throw error;
    }
};
