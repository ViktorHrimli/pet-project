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
  async (state, thunkAPI) => {
    const {
      key,
      title,
      name,
      date,
      breed,
      sex,
      location,
      price,
      comments,
      photo,
      token,
    } = state;

    const formData = new FormData();

    formData.append('category', ...key);
    formData.append('title', title);
    formData.append('name', name);
    formData.append('birthday', date);
    formData.append('breed', breed);
    formData.append('sex', sex);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('comments', comments);
    formData.append('photo', photo);

    try {
      const { data } = await axios.post('/notices/current/add', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/current/get');
      return data.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteNotices = createAsyncThunk(
  'notices/deleteNotices',
  async (noticesId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/notices/current/remove/${noticesId}`,
        { noticesId }
      );
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
