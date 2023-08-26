import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import {fetchOneNews } from './newsThunk';
import { useSelector } from 'react-redux';
import { selectOneNews } from './newsSlice';
import NewsDetailsBlock from './components/NewsDetailsBlock';
import Comments from '../comments/Comments';

const OneNewsDetails = () => {
  const { id }= useParams();
  const dispatch = useAppDispatch();
  const oneNews = useSelector(selectOneNews);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneNews(id));
    }
  }, [dispatch]);

  let details = <></>;
  if (oneNews) {
    details = <NewsDetailsBlock id={oneNews.id} title={oneNews.title} description={oneNews.description} date={oneNews.date} />
  }

  return (
    <>
      {details}
      <Comments />
    </>
  );
};

export default OneNewsDetails;