import { Article } from "../interfaces/HeadlineIF";

const BASE_URL = "http://localhost:3001/api";

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
    const url = new URL(`${BASE_URL}/article`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    
    if (category && category !== 'all') {
      url.searchParams.append('category', category.toLowerCase());
    }

    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
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