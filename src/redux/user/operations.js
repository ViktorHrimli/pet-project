import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/get');

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, thunkAPI) => {
    try {
      const { data: result } = await axios.put('/user/update', data);

      return result;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async({ name, breed, comments, date, photo, token}, thunkAPI) => {

    const formData = new FormData();


    formData.append('name', name);
    formData.append('breed', breed);
    formData.append('comments', comments);
    formData.append('date', date);
    formData.append('photo', photo);

    try {
	    const { data } = await axios.post('/pets/add', formData, {
        headers: {Authorization: `Bearer ${token}` },
      })
        return data;
    }
          catch (e) {
        return thunkAPI.rejectWithValue(e.message)
      }
  }
);

// export const removeUserPet = createAsyncThunk(
//   'user/removeUserPet',
//   async (id, { rejectWithValue }) => {
//     try {
//       const result = await axios.removeUserPet(id);
//       return result;
//     } catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );

export const removeUserPet = createAsyncThunk(
'user/removeUserPet',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/pets/remove/${id}`);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkAPI.rejectWithValue(error);
    }
  }
);