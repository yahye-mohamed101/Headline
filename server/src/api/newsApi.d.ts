declare module 'newsapi' {
    interface ArticleResponse {
      status: string;
      totalResults: number;
      articles: Array<{
        source: {
          id: string | null;
          name: string;
        };
        author: string | null;
        title: string;
        description: string | null;
        url: string;
        urlToImage: string | null;
        publishedAt: string;
        content: string | null;
      }>;
    }
  
    interface NewsAPIOptions {
      q?: string;
      sources?: string;
      domains?: string;
      excludeDomains?: string;
      from?: string;
      to?: string;
      language?: string;
      sortBy?: string;
      page?: number;
      pageSize?: number;
      category?: string;
      country?: string;
    }
  
    class NewsAPI {
      constructor(apiKey: string);
      v2: {
        topHeadlines(options: NewsAPIOptions): Promise<ArticleResponse>;
        everything(options: NewsAPIOptions): Promise<ArticleResponse>;
        sources(options: NewsAPIOptions): Promise<ArticleResponse>;
      };
    }
  
    export = NewsAPI;
  }