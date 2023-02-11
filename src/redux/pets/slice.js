import { createSlice } from '@reduxjs/toolkit';
import { addPet } from './operations';
const petsInitialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  extraReducers: {
    [addPet.pending](state) {
      state.isLoading = true;
    },
    [addPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addPet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.pets.push(action.payload);
    },
  },
});

export const petsReducer = petsSlice.reducer;
