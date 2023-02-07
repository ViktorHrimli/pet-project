import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPet = createAsyncThunk(
  'pets/addPet',
  async ({name, breed, comments, date}, thunkAPI) => {
    try {
      const {data} = await axios.post('/pets/add', { name, breed, comments, date });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);