import React from 'react';
import { Container, Typography } from '@mui/material';
import NewsForm from './components/NewsForm';

const NewNews = () => {
  return (
    <Container maxWidth='md' >
      <Typography variant='h4' sx={{mb:3}}>
        Add new news
      </Typography>
      <NewsForm/>
    </Container>
  );
};

export default NewNews;