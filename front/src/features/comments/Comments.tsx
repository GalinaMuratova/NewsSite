import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectComments } from './commentsSlice';
import { deleteComment, fetchComments } from './commentsThunk';
import CommentBlock from './components/CommentBlock';
import { useParams } from 'react-router-dom';
import CommentForm from './components/CommentForm';
import { Grid, Typography } from '@mui/material';


const Comments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const onDelete = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this comment?');
    if (confirmed) {
      await dispatch(deleteComment(id));
      await dispatch(fetchComments());
    }
  };

  return (
    <>
      <h2>Comments</h2>
      {comments.map((el) => {
        if (id === el.idNews) {
          return <CommentBlock key={el.id} author={el.author} text={el.text} idComments={el.id} deleteNews={() => onDelete(el.id)}/>;
        }
        return null;
      })}
      <Grid style={{backgroundColor:'aliceblue', padding: '20px', margin:'20px 0', borderRadius:'8px'}}>
        <Typography component='h3' variant='h4' style={{textAlign:'center'}}>
          Add comment
        </Typography>
        <CommentForm />
      </Grid>
    </>
  );
};

export default Comments;
