import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { NewsMutation } from '../../../types';
import { createNews, fetchNews } from '../newsThunk';
import { Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { selectCreateLoading } from '../newsSlice';
import FileInput from '../../../components/UI/FileInput/FileInput';

const NewsForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectCreateLoading);
  const [state, setState] = useState<NewsMutation>({
    title: '',
    description: '',
    image: null
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createNews(state));
    navigate('/');
    await dispatch(fetchNews());
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setState(prevState => ({ ...prevState, [name]: files[0] }));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title"
            label="Title"
            value={state.title}
            onChange={inputChangeHandler}
            name="title"
            required
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="description"
            label="Description"
            value={state.description}
            onChange={inputChangeHandler}
            name="description"
            multiline
            required
            rows={4}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={fileChangeHandler}
            name='image'
            label='image' />
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            size="small"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewsForm;
