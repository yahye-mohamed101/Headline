import { Article } from "../models/index.js";

export const seedArticles = async () => {
    try {
        const articles = [
            {
                status: "ok",
                totalResults: 1,
                articles: [
                    {
                        source: {
                            id: "bbc-news",
                            name: "BBC News"
                        },
                        author: "BBC News",
                        title: "Prince Andrew will not join royals at Sandringham for Christmas",
                        description: "An alleged Chinese spy, linked to the royal, was named on Monday following a High Court judgement.",
                        url: "https://www.bbc.co.uk/news/articles/ce32n0eze87o",
                        urlToImage: "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/13a8/live/60295a20-bbcc-11ef-96a6-9d05544d8e20.jpg",
                        publishedAt: "2024-12-16T19:37:16.8603434Z",
                        content: "The Christmas morning church service in Sandringham is a big event in the royal calendar, bringing together the Royal Family for a public appearance, with crowds and photographers capturing the momen… [+2052 chars]"
                    },
                ]
            },
        ]
        await Article.bulkCreate(articles)
        console.log('Article has been successfully seeded.');
    } catch (error) {
        console.log('Error seeding article:', error)
    }
}
