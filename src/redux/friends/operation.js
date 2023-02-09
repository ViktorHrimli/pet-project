import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';

export const fetchFriends = createAsyncThunk(
    "friends/fetchFriends",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/services/getAll");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });