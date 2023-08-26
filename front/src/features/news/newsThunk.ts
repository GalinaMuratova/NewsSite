import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { News, NewsMutation } from '../../types';

export const fetchNews  =createAsyncThunk<News[]>(
  'news/fetchAll',
  async () => {
    const newsResponse = await axiosApi.get<News[]>('/news');
    return newsResponse.data;
  }
);

export const fetchOneNews = createAsyncThunk<News, string>(
  'news/fetchOne',
  async (newsId) => {
    const newsResponse = await axiosApi.get<News>(`/news/${newsId}`);
    return newsResponse.data;
  }
);
export const createNews = createAsyncThunk<void, NewsMutation>(
  'news/create',
  async (newsMutation) => {
    const formData = new FormData();

    const keys = Object.keys(newsMutation) as (keyof NewsMutation)[];
    keys.forEach(key => {
      const value = newsMutation[key];
      if (value !== null) {
        formData.append(key,value);
      }
    })

    await axiosApi.post('/news', formData);
  }
);

export const deleteNews = createAsyncThunk<void, string>(
  'news/delete',
  async (newsId) => {
    await axiosApi.delete(`/news/${newsId}`);
  }
);