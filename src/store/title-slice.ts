import { TitleModel, TitleArrayModel } from '../models/redux-models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genres } from '../constants';

const initialTitleState: TitleArrayModel = {
  title: null,
  titles: [],
  genres: genres,
};

const titleSlice = createSlice({
  name: 'title',
  initialState: initialTitleState,
  reducers: {
    setTitles(state, action: PayloadAction<TitleModel[]>) {
      state.titles = action.payload;
    },
    setTitle(state, action: PayloadAction<TitleModel | null>) {
      state.title = action.payload;
    },
  },
});
export default titleSlice;
