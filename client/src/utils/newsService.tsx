import { Article } from "../interfaces/HeadlineIF";

export interface NewsResponse {
  articles: Article[];
  totalResults: number;
  totalPages: number;
  currentPage: number;
}

export const fetchNews = async (
  category?: string,
  page = 1,
  limit = 12
): Promise<NewsResponse> => {
  try {
    let endpoint = '/api/article';
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });

    if (category && category !== 'all') {
      queryParams.append('category', category.toLowerCase());
    }

    const url = `${endpoint}?${queryParams.toString()}`;
    console.log('Fetching from URL:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
      totalPages: data.totalPages || 1,
      currentPage: data.currentPage || 1
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};