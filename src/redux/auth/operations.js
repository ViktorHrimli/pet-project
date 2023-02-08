import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    console.log('credential', credential);
    try {
      const { data } = await axios.post('/auth/signup', credential);
      console.log('data', data);
      token.set(data.token);
      console.log('token', token);
      console.log('credential', credential);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('User creation error');
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signout', credential);
      token.unset(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
