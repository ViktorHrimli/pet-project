import { createSlice } from '@reduxjs/toolkit';

const filterNoticesInitialState = {
  query: '',
  currentNotices: []
}

const filterNoticesSlice = createSlice({
    name: 'filterNotices',
    initialState: filterNoticesInitialState,
    reducers: {
        setFilterNotices: {
            reducer(state, action) {
              state.query = action.payload;
          },
        },
        currentNotices: {
          reducer(state, action) {
          state.currentNotices = action.payload;
      },
    },
  },
});

export const { setFilterNotices, currentNotices } = filterNoticesSlice.actions;
export const filterNoticesReducer = filterNoticesSlice.reducer;
