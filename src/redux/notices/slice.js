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
  state.items = [];
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  userItems: [],
  myFavoriteItems: [],
  noticesById: [],
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: {
    [getAll.pending]: handlePending,
    [getUserNotices.pending]: handlePending,
    [favoriteNotices.pending]: handlePending,

    [getAll.rejected]: handleRejected,
    [getUserNotices.rejected]: handleRejected,
    [getNoticesById.rejected]: handleRejected,

    [addNotices.rejected]: handleRejected,
    [addFavoriteNotices.rejected]: handleRejected,

    [favoriteNotices.rejected]: handleRejected,
    [removeFavoriteNotices.rejected]: handleRejected,

    [deleteNotices.rejected]: handleRejected,

    [getAll.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [favoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.myFavoriteItems = action.payload;
    },
    [getUserNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.userItems = action.payload;
    },
    [getNoticesById.fulfilled](state, action) {
      state.isLoading = false;
      state.noticesById = action.payload;
    },

    [addNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userItems.unshift(action.payload);
      function foo() {
        for (const item of state.items) {
          const isCategory = item.category === action.payload.category;
          if (isCategory) {
            return state.items.unshift(action.payload);
          }
        }
        return;
      }
      foo();
    },
    [addFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const foo = state.items.find(
        item => item._id === action.payload.noticeId
      );
      const foob = state.userItems.find(
        item => item._id === action.payload.noticeId
      );
      state.myFavoriteItems = [foo ? foo : foob, ...state.myFavoriteItems];
    },

    [deleteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.userItems = state.userItems.filter(
        item => item._id !== action.payload.noticeId
      );
      state.items = state.userItems.filter(
        item => item._id !== action.payload.noticeId
      );
    },

    [removeFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.myFavoriteItems = state.myFavoriteItems.filter(
        item => item._id !== action.payload.noticeId
      );
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
