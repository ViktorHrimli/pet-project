import { createSlice } from '@reduxjs/toolkit';

const filterNoticesInitialState = '';

const filterNoticesSlice = createSlice({
  name: 'filterNotices',
  initialState: filterNoticesInitialState,
  reducers: {
    setFilterNotices: {
      reducer(state, action) {
        state = action.payload;
        return state;
      },
    },
  },
});

export const { setFilterNotices } = filterNoticesSlice.actions;
export const filterNoticesReducer = filterNoticesSlice.reducer;
