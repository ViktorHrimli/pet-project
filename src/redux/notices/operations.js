import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

export const getAll = createAsyncThunk(
  'notices/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/getAll/:category');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getNoticesById = createAsyncThunk(
  'notices/getNoticesById',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/get/:noticeId');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addFavoriteNotices = createAsyncThunk(
  'notices/addFavoriteNotices',
  async ({ noticeId }, thunkAPI) => {
    try {
      const { data } = await axios.put('/notices/favorite/add/:noticeId', {
        noticeId,
      });
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const favoriteNotices = createAsyncThunk(
  'notices/favoriteNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/favorite/get');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeFavoriteNotices = createAsyncThunk(
  'notices/removeFavoriteNotices',
  async ({ noticeId }, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        '/notices/favorite/remove/:noticeId',
        {
          noticeId,
        }
      );
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addNotices = createAsyncThunk(
  'notices/addNotices',
  async ({ breed, place, age, price }, thunkAPI) => {
    try {
      const { data } = await axios.post('/notices/current/add', {
        breed,
        place,
        age,
        price,
      });
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices//current/get');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteNotices = createAsyncThunk(
  'notices/deleteNotices',
  async ({ noticesId }, thunkAPI) => {
    try {
      const { data } = await axios.removeNotice(
        `/notices//current/remove/:noticeId`,
        { noticesId }
      );
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
