import { createSlice } from '@reduxjs/toolkit';

const noticesInitialState = {
    items: [],
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState: noticesInitialState,
    extraReducers: {
    
    },
});

export const noticesReducer = noticesSlice.reducer;