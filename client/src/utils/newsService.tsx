import { Article } from "../interfaces/HeadlineIF";

const BASE_URL = "/api"; // Updated to use proxy

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
    const url = new URL(`${window.location.origin}${BASE_URL}/article`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    
    if (category && category !== 'all') {
      url.searchParams.append('category', category.toLowerCase());
    }

    console.log('Fetching from URL:', url.toString());

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