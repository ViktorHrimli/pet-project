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
import { petsReducer } from './pets/slice';
import { noticesReducer } from './notices/slice';
import userReducer from "../redux/user/slice";
import { newsReducer } from './news/slice';
import { friendsReducer } from './friends/slice';
import { filterNoticesReducer } from './notices/filterSlice';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  pets: petsReducer,
  notices: noticesReducer,
  news: newsReducer,
  friends: friendsReducer,
  filterNotices: filterNoticesReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export const persistor = persistStore(store);
