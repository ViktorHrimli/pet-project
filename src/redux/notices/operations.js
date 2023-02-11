import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

export const getAll = createAsyncThunk(
  'notices/sell',
  async (result, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/getAll/${result}`);
      return data.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getNoticesById = createAsyncThunk(
  'notices/getNoticesById',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/get/${noticeId}`, {
        noticeId,
      });
      return data.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addFavoriteNotices = createAsyncThunk(
  'notices/addFavoriteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.put(`/notices/favorite/add/${noticeId}`, {
        noticeId,
      });
      return { ...data, noticeId };
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
      return data.favorite;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeFavoriteNotices = createAsyncThunk(
  'notices/removeFavoriteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/notices/favorite/remove/${noticeId}`,
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
  async (
    {
      photo,
      category,
      title,
      name,
      birthday,
      breed,
      sex,
      location,
      price,
      comments,
    },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.post('/notices/current/add', {
        photo,
        category,
        title,
        name,
        birthday,
        breed,
        sex,
        location,
        price,
        comments,
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
