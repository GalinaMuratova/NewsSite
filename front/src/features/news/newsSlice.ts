import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '../../types';
import { createNews, fetchNews, fetchOneNews } from './newsThunk';
import { RootState } from '../../app/store';

interface NewsState {
  items: News[];
  fetchLoading: boolean;
  fetchLoadingOne: boolean;
  createLoading: boolean;
  item: News | null
}

const initialState: NewsState = {
  items: [],
  fetchLoading: false,
  fetchLoadingOne: false,
  createLoading: false,
  item: null,
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<News>) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {

    });
    builder.addCase(fetchNews.fulfilled, (state, {payload: news}) => {
      state.fetchLoading = false;
      state.items = news;
    });

    builder.addCase(fetchOneNews.pending, (state) => {

    });
    builder.addCase(fetchOneNews.fulfilled, (state, {payload: news}) => {
      state.fetchLoading = false;
      state.item = news;
    });

    builder.addCase(createNews.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createNews.fulfilled, (state) => {
      state.createLoading = false;
    });

    builder.addCase(createNews.rejected, (state) => {
      state.createLoading = false;
    });
  },
});

export const selectNews = (state: RootState) => state.newsReducer.items;
export const selectCreateLoading = (state:RootState) => state.newsReducer.createLoading;
export const selectOneNews = (state: RootState) => state.newsReducer.item;
export const newsReducer = newsSlice.reducer;