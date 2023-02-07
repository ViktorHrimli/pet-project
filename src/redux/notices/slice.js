import { createSlice } from '@reduxjs/toolkit';
import {
  getAll,
  getNoticesById,
  addFavoriteNotices,
  favoriteNotices,
  removeFavoriteNotices,
  addNotices,
  getUserNotices,
  deleteNotices,
} from './operations';
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  userItems: [],
  favoriteItems: [],
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: {
    [getAll.pending]: handlePending,
    [getUserNotices.pending]: handlePending,
    [getNoticesById.pending]: handlePending,

    [addNotices.pending]: handlePending,
    [addFavoriteNotices.pending]: handlePending,

    [favoriteNotices.pending]: handlePending,
    [removeFavoriteNotices.pending]: handlePending,

    [deleteNotices.pending]: handlePending,

    [getAll.pending]: handleRejected,
    [getUserNotices.pending]: handleRejected,
    [getNoticesById.pending]: handleRejected,

    [addNotices.pending]: handleRejected,
    [addFavoriteNotices.pending]: handleRejected,

    [favoriteNotices.pending]: handleRejected,
    [removeFavoriteNotices.pending]: handleRejected,

    [deleteNotices.pending]: handleRejected,

    [getAll.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [favoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.favoriteItems = action.payload;
    },
    [getUserNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.userItems = action.payload;
    },

    [addNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favoriteItems.unshift(action.payload);
    },

    [deleteNotices.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.favoriteItems.findIndex(
        task => task.id === action.payload.id
      );
      state.favoriteItems.splice(index, 1);
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
