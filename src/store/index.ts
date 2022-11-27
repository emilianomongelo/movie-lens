import { configureStore } from '@reduxjs/toolkit';
import titleSlice from './title-slice';

const store = configureStore({
  reducer: { title: titleSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
