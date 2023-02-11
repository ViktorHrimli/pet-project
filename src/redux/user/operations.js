import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as api from 'redux/user/apiUser'

// export const getUserData = createAsyncThunk(
//   'user/getUserData',
//   async (result, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/user/get');
//       console.log('data:', data);
//       return data;
//     } catch ({ message }) {
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async ({ name, email, birthday, phone, city, token }, thunkAPI) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('breed', email);
    formData.append('comments', birthday);
    formData.append('date', phone);
    formData.append('photo', city);

    try {
      const { data } = await axios.get('/user/get', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('data in operations:', data);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const getUserData = createAsyncThunk(
// 	'user/getUserData',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const result = await axios.getUserData();
// 			return result;
// 		} catch ({ response }) {
// 			const { status, data } = response;
// 			const error = {
// 				status,
// 				message: data.message,
// 			};
// 			return rejectWithValue(error);
// 		}
// 	}
// );

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.updateUserData(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.addUserPet(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeUserPet = createAsyncThunk(
  'user/removeUserPet',
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.removeUserPet(id);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
