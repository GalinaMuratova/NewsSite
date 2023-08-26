import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createComment, fetchComments } from './commentsThunk';
import { Comment } from '../../types';

interface CommentsState {
  items: Comment [];
  fetchLoading: boolean;
  createLoading: boolean;
}

const initialState: CommentsState = {
  items: [],
  fetchLoading: false,
  createLoading: false,
};

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, { payload: comment }) => {
      state.fetchLoading = false;
      state.items = comment;
    });

    builder.addCase(createComment.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createComment.fulfilled, (state) => {
      state.createLoading = false;
    });

    builder.addCase(createComment.rejected, (state) => {
      state.createLoading = false;
    });
  },
});

export const selectComments = (state: RootState) => state.commentsReducer.items;
export const selectCreateLoading = (state:RootState) => state.commentsReducer.createLoading;
export const commentsReducer = commentsSlice.reducer;
