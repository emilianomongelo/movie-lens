import { combineReducers, configureStore } from '@reduxjs/toolkit';
import titlesSlice from './titles/titles-slice';
import userSlice from './user/user-slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['titles']
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  titles: titlesSlice.reducer,
  user: persistReducer(userPersistConfig, userSlice.reducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
