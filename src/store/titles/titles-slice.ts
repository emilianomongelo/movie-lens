import { TitleModel, TitlesArrayModel } from '../../models/redux-models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genres } from '../../constants';

const initialTitlesState: TitlesArrayModel = {
  loading: false,
  title: null,
  titles: [],
  genres: genres,
};

const titlesSlice = createSlice({
  name: 'titles',
  initialState: initialTitlesState,
  reducers: {
    reset(state) {
      state.title = null;
      state.titles = [];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setTitles(state, action: PayloadAction<TitleModel[]>) {
      state.titles = action.payload;
    },
    setTitle(state, action: PayloadAction<TitleModel | null>) {
      state.title = action.payload;
    },
  },
});
export default titlesSlice;
