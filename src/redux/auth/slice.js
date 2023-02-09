import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './operations';

const authInitialState = {
  user: {
    email: null,
    password: null,
    name: null,
    location: null,
    phone: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
export const handleRejected = (state, { payload }) => {
  // state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      const { user } = action.payload;
      state.user = user;
      state.token = user.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
