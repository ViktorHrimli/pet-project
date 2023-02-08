import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const initialState = {
    news: [],
    error: null,
};


const newsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: {
    [fetchNews.fulfilled](state, action) {
    state.error = null;
    state.news = action.payload;
    },
    [fetchNews.rejected](state, action) {
    state.error = action.payload;
    },
    }
});


export const newsReducer = newsSlice.reducer;