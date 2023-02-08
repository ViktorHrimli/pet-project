import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const initialState = {
    news: [],
    isLoading: false,
    error: null,
};

// const fetchNewsFulfilledReducer = (state, action) => {
//     console.log(state)
//     state.news = action.payload;
// };

const newsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: {
    [fetchNews.pending](state) {
      state.isLoading = true;
    },
    [fetchNews.fulfilled](state, action) {
    state.isLoggedIn = false;
    state.error = null;
    state.news = action.payload;
    },
    [fetchNews.rejected](state, action) {
    state.isLoggedIn = false;
    state.error = action.payload;
    },
    }
});


export const newsReducer = newsSlice.reducer;