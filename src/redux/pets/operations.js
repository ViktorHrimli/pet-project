import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPet = createAsyncThunk(
  'pets/addPet',
  async ({ name, breed, comments, date, photo, token }, thunkAPI) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('breed', breed);
    formData.append('comments', comments);
    formData.append('date', date);
    formData.append('photo', photo);

    try {
      const { data } = await axios.post('/pets/add', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
