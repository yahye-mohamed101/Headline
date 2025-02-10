import NewsAPI from 'newsapi';

if (!process.env.NEWS_API_KEY) {
    throw new Error('NEWS_API_KEY must be defined in environment variables');
}

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export const fetchLatestNews = async (page = 1, pageSize = 20) => {
    try {
        console.log('Fetching latest news with:', { page, pageSize }); // Debug log
        
        const response = await newsapi.v2.topHeadlines({
            language: 'en',
            country: 'us',
            page,
            pageSize
        });

        console.log('NewsAPI response:', {
            status: response.status,
            totalResults: response.totalResults,
            articleCount: response.articles?.length
        }); // Debug log

        if (response.status !== 'ok') {
            throw new Error(`NewsAPI error: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Error in fetchLatestNews:', error);
        throw error;
    }
};

export const fetchNewsByCategory = async (category: string, page = 1, pageSize = 20) => {
    try {
        console.log('Fetching news by category:', { category, page, pageSize }); // Debug log

        const response = await newsapi.v2.topHeadlines({
            category: category.toLowerCase(),
            language: 'en',
            country: 'us',
            page,
            pageSize
        });

        console.log('NewsAPI response for category:', {
            category,
            status: response.status,
            totalResults: response.totalResults,
            articleCount: response.articles?.length
        }); // Debug log

        if (response.status !== 'ok') {
            throw new Error(`NewsAPI error: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Error in fetchNewsByCategory:', error);
        throw error;
    }
};