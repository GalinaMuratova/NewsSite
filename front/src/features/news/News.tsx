import React, { useEffect } from 'react';
import { useAppDispatch} from '../../app/hooks';
import { Simulate } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';
import { selectProducts } from './newsSlice';
import { deleteNews, fetchNews } from './newsThunk';
import NewsCard from './components/NewsCard';
import { Button, Grid, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});
const News = () => {
  const dispatch = useAppDispatch();
  const news = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const onDelete = async (id: string) => {
    await dispatch(deleteNews(id));
    await dispatch(fetchNews());
    console.log('delete')
  };


  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">
              All news
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} to="news/create">
              Add news
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          {news.map((el) => (
            <NewsCard
              key={el.id}
              title={el.title}
              description={el.description}
              image={el.image}
              date={el.date}
              id={el.id}
              deleteNews={() => onDelete(el.id)}/>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default News;