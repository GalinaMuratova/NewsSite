import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Comment, CommentWithoutId } from '../../types';

export const fetchComments  =createAsyncThunk<Comment[]>(
  'comments/fetchAll',
  async () => {
    const commentsResponse = await axiosApi.get<Comment[]>('/comments');
    return commentsResponse.data;
  }
);

export const fetchOneComment = createAsyncThunk<Comment, string>(
  'comments/fetchOne',
  async (commentsId) => {
    const commentsResponse = await axiosApi.get<Comment>(`/comments/${commentsId}`);
    return commentsResponse.data;
  }
);

export const createComment = createAsyncThunk<void, CommentWithoutId>(
  'comments/create',
  async (commentsMutation) => {
    await axiosApi.post('/comments', commentsMutation);
  }
);

export const deleteComment = createAsyncThunk<void, string>(
  'comments/delete',
  async (commentId) => {
    await axiosApi.delete(`/comments/${commentId}`);
  }
);