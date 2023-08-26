import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { CommentWithoutId } from '../../../types';
import { createComment, fetchComments } from '../commentsThunk';
import { Button, Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

const CommentForm = () => {
  const dispatch = useAppDispatch();
  const {id} =useParams();
  const [state, setState] = useState<CommentWithoutId>({
    text:'',
    author:'',
    idNews: ''
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createComment(state));
    setState((prevState) => ({
      author:'',
      text:'',
      idNews:''
    }));
    await dispatch(fetchComments());
  };
  let newId = ''
  if (id) {
    newId = id.toString()
  }

  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} =e.target;
    setState(prevState => {
      return {...prevState, [name]: value, idNews: newId};
    });
  };

  return (
    <>
      <form
      autoComplete='on'
      onSubmit={onSubmit}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField
              id="author"
              label="Author"
              value={state.author}
              onChange={inputChange}
              name="author"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="text"
              label="Your comment"
              value={state.text}
              onChange={inputChange}
              name="text"
              required
            />
          </Grid>
          <Grid item xs>
            <Button type='submit'  variant="outlined">Send</Button>
          </Grid>
        </Grid>
      </form>
      
    </>
  );
};

export default CommentForm;