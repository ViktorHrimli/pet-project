import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const initialState = {
    news: [],
    error: null,
    isLoading: false,
    isPlug: false,
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: {
    [fetchNews.pending](state) {
        state.isLoading = true;
    },
    [fetchNews.fulfilled](state, action) {
    state.news = action.payload;
    state.isLoading = false;
    state.isPlug = true;
    if(state.news.length){
    state.isPlug = false;
    }
    state.error = null;
    },
    [fetchNews.rejected](state, action) {
    state.error = action.payload;
    },
    }
});


export const newsReducer = newsSlice.reducer;