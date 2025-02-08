import { Article } from "../interfaces/HeadlineIF";

const BASE_URL = "http://localhost:3001/api";

export interface ApiResponse {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  articles: Article[];
}

export const fetchNews = async (category?: string, page = 1, limit = 20): Promise<Article[]> => {
  try {
    const url = new URL(`${BASE_URL}/article`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    
    if (category && category !== 'all') {
      url.searchParams.append('category', category.toLowerCase());
    }

    console.log('Fetching from URL:', url.toString()); // Debug log

    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
    }
    
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};