import { Article } from "../interfaces/HeadlineIF";

const BASE_URL = "http://localhost:3001/api";

export interface ApiResponse {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  articles: Article[];
}

export const fetchNews = async (category?: string, page = 1, limit = 10): Promise<Article[]> => {
  try {
    const url = new URL(`${BASE_URL}/article`);
    if (category && category !== 'all') {
      url.searchParams.append('category', category);
    }
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news.");
    const data: ApiResponse = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchArticleById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/article/${id}`);
    if (!response.ok) throw new Error("Failed to fetch article.");
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};