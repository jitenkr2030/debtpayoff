import React, { useEffect, useState } from 'react';
import { getHelpArticles } from '../../services/supportService';

const HelpCenter = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articleData = await getHelpArticles();
        setArticles(articleData);
      } catch (error) {
        console.error('Failed to fetch help articles', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Help Center</h2>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index}>
            <p>{article.title}</p>
            <p>{article.content}</p>
          </div>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
};

export default HelpCenter;
