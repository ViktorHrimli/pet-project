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
  sellItems: [],
  lostItems: [],
  freeItems: [],
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
    [getNoticesById.pending](state) {
      state.isLoading = true;
      state.noticesById = [];
    },

    [getAll.rejected]: handleRejected,
    [getUserNotices.rejected]: handleRejected,
    [getNoticesById.rejected]: handleRejected,

    [addNotices.rejected]: handleRejected,
    [addFavoriteNotices.rejected]: handleRejected,

    [favoriteNotices.rejected]: handleRejected,
    [removeFavoriteNotices.rejected]: handleRejected,

    [deleteNotices.rejected]: handleRejected,

    [getAll.fulfilled](state, action) {
      state.items = action.payload;
      function currentCategory() {
        for (const item of state.items) {
          if (item.category === 'sell') {
            return (state.sellItems = action.payload);
          } else if (item.category === 'lost-found') {
            return (state.lostItems = action.payload);
          } else if (item.category === 'in-good-hands') {
            return (state.freeItems = action.payload);
          }
        }
        return;
      }
      currentCategory();
      state.isLoading = false;
    },
    [favoriteNotices.fulfilled](state, action) {
      state.myFavoriteItems = action.payload;
      state.isLoading = false;
    },
    [getUserNotices.fulfilled](state, action) {
      state.userItems = action.payload;
      state.isLoading = false;
    },
    [getNoticesById.fulfilled](state, action) {
      state.noticesById = action.payload;
      state.isLoading = false;
    },

    [addNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userItems.unshift(action.payload);
      function foo() {
        for (const item of state.sellItems) {
          if (item.category === action.payload.category) {
            return state.sellItems.unshift(action.payload);
          }
        }
        for (const item of state.lostItems) {
          if (item.category === action.payload.category) {
            return state.lostItems.unshift(action.payload);
          }
        }
        for (const item of state.freeItems) {
          if (item.category === action.payload.category) {
            return state.freeItems.unshift(action.payload);
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
      state.sellItems = state.sellItems.filter(
        item => item._id !== action.payload.noticeId
      );
      state.lostItems = state.lostItems.filter(
        item => item._id !== action.payload.noticeId
      );
      state.freeItems = state.freeItems.filter(
        item => item._id !== action.payload.noticeId
      );
      state.myFavoriteItems = state.myFavoriteItems.filter(
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
