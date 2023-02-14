import { createSlice } from '@reduxjs/toolkit';

const filterNoticesInitialState = {
  keyword: '',
  isSearch: false,
  currentNotices: []
}

const filterNoticesSlice = createSlice({
    name: 'filterNotices',
    initialState: filterNoticesInitialState,
    reducers: {
        setFilterNotices: {
            reducer(state, action) {
              state.keyword = action.payload;
          },
        },
        setSearchNotices: {
          reducer(state, action) {
            state.isSearch = action.payload;
        },
      },
        currentNotices: {
          reducer(state, action) {
          state.currentNotices = action.payload;
      },
    },
  },
});

export const { setFilterNotices, currentNotices, setSearchNotices } = filterNoticesSlice.actions;
export const filterNoticesReducer = filterNoticesSlice.reducer;
