import { createSlice } from '@reduxjs/toolkit';

const patsInitialState = {
    pats: [],
};

const patsSlice = createSlice({
    name: 'pats',
    initialState: patsInitialState,
    extraReducers: {
    
    },
});

export const patsReducer = patsSlice.reducer;