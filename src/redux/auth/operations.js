import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

const token = {
	set(token) {
			axios.defaults.headers.common.Authorization = token;
	},
	unset() {
			axios.defaults.headers.common.Authorization = '';
	}
};

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
});