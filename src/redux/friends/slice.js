import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operation';

const initialState = {
    friends: [],
    error: null,
};


const newsFriends = createSlice({
    name: "friends",
    initialState,
    extraReducers: {
    [fetchFriends.fulfilled](state, action) {
    state.error = null;
    state.friends = action.payload;
    },
    [fetchFriends.rejected](state, action) {
    state.error = action.payload;
    },
    }
});


export const friendsReducer = newsFriends.reducer;