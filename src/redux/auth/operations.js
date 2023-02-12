import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const clearAuthHeader = () => {
  axios.defaults.headers.get.Authorization = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credential);
      token.set(data.user.token);

      return data;
    } catch (e) {
      console.log(e.message);
      if (e.response.status === 409) {
        toast.error('User with this email already exists', {
          position: 'top-right',
        });
      } else if (e.response.status === 500) {
        toast.error('Technical error, please try again later', {
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue('User creation error');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', userData);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Email not found!');
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signout', credential);
      token.unset(data.token);
      clearAuthHeader();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/user/get');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
