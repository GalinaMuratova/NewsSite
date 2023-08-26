import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from '../../types';
import { createNews, fetchNews } from './newsThunk';
import { RootState } from '../../app/store';

interface NewsState {
  items: News[];
  fetchLoading: boolean;
  createLoading: boolean;
}

const initialState: NewsState = {
  items: [],
  fetchLoading: false,
  createLoading: false,
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

export const selectProducts = (state: RootState) => state.newsReducer.items;
export const selectCreateLoading = (state:RootState) => state.newsReducer.createLoading;
export const newsReducer = newsSlice.reducer;