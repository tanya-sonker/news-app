import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NewsCard from './Card';
import 'dotenv/config';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const phrase = "apple AND iphone web app";
    const query = encodeURIComponent(phrase);

    // Fetch news data
    axios.get(`https://newsapi.org/v2/everything?q=${query}&domains=theverge.com, techcrunch.com&apiKey=${apiKey}&language=en`)
      .then(response => setNews(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">

      <Box pt={3} pb={6} sx={{ flexDirection: 'row'}}>
      <Typography variant="h2">News for Apple</Typography>
      <Typography variant="body1">Read the latest on web apps from The Verge and TechCrunch</Typography>
      </Box>
      
      <Grid container spacing={1}>
        {news.map((article, index) => (
          <Grid item md={4}>
          <Box key={index} sx={{           
          minWidth: 350,
          minHeight: 350,
          borderRadius: 1}}>
          <NewsCard
          image={article.urlToImage}
          title={article.title}
          source={article.source.name}
          description={article.description}
          url={article.url}
          ></NewsCard>
          </Box>
          </Grid>
        ))}
        </Grid>
        </Container>
    </div>
  );
};

export default News;