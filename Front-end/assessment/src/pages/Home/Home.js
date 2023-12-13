import {React, useState, useEffect} from 'react';
import style from './Home.module.css'
import axios from 'axios';

function Home() {
  const [articles, setarticles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/articles/getAll"
        );
        const articlesData = response.data.data;
        setarticles(articlesData);
        console.log("Data Respond: ", articlesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.main}>
      <header className={style.header}>
        <h1 className={style.title}>All Articles</h1>
      </header>
      <div className={style.articles}>
        {articles.map((article, index) => (
          <div key={index} className={style.article}>
            <img src={article.imageURL} alt={article.title} />
            <div className={style.content}>
              <h2>{article.title}</h2>
              <p>Category: {article.category}</p>
              <p>{article.body}</p>
              <p>Author: {article.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
