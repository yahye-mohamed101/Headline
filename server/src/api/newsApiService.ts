import NewsAPI from 'newsapi';

if (!process.env.NEWS_API_KEY) {
    throw new Error('NEWS_API_KEY must be defined in environment variables');
}

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export const fetchLatestNews = async (page = 1, pageSize = 20) => {
    try {
        const response = await newsapi.v2.topHeadlines({
            language: 'en',
            country: 'us', // Add country parameter
            page,
            pageSize
        });

        return response;
    } catch (error) {
        console.error('Error fetching news from API:', error);
        throw error;
    }
};

export const fetchNewsByCategory = async (category: string, page = 1, pageSize = 20) => {
    try {
        console.log('Fetching category:', category); // Debug log

        const response = await newsapi.v2.topHeadlines({
            category: category.toLowerCase(),
            language: 'en',
            country: 'us', // Add country parameter
            page,
            pageSize
        });

        // Debug log
        console.log(`Found ${response.totalResults} articles for category ${category}`);

        return response;
    } catch (error) {
        console.error('Error fetching category news from API:', error);
        throw error;
    }
};