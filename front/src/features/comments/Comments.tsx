import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectComments } from './commentsSlice';
import { fetchComments } from './commentsThunk';
import CommentBlock from './components/CommentBlock';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <>
      <h2>Comments</h2>
      {comments.map((el) => {
        if (id === el.idNews) {
          return <CommentBlock key={el.id} author={el.author} text={el.text} idComments={el.id} />;
        }
        return null;
      })}
    </>
  );
};

export default Comments;
