import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth/slice';
import { patsReducer } from './pats/slice';
import { noticesReducer } from './notices/slice';
import { userApi } from './user/UserApi';
import { userPetsApi } from './user/userPetsApi';
import userReducer from "./user/UserSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
  auth: persistReducer(authPersistConfig, authReducer),
  pats: patsReducer,
	notices: noticesReducer,
  [userApi.reducerPath]: userApi.reducer,
  [userPetsApi.reducerPath]: userPetsApi.reducer,
  user: userReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userPetsApi.middleware)
    .concat(userApi.middleware)
  },
});

export const persistor = persistStore(store);
