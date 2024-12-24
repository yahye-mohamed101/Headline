const BASE_URL = "http://localhost:PORT/api"; // Replace PORT with backend's running port

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/news`);
    if (!response.ok) throw new Error("Failed to fetch news.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchSources = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sources`);
    if (!response.ok) throw new Error("Failed to fetch sources.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
