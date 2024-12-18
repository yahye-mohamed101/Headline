import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Headline from "../interfaces/HeadlineIF";

interface ArticleDetailsProps {
    article: Headline;
};

const ArticleDetails: React.FC<ArticleDetailsProps> = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<Headline | null>(null);

    useEffect(( => {
        const fetchArticleDetails = async () => {
            try {
                const response = await
            }
        }
    }))
}