// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const apiKey = '2137eb4d5d834a51a79c702022a856d3'; // Replace with your actual API key
    //const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=entertainment`;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment`;
  
    axios.get(apiUrl, {
      headers:{
        'X-Api-Key': apiKey
      }
    })
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;

