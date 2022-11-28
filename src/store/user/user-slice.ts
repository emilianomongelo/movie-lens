import { UserArrayModel } from '../../models/redux-models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserState: UserArrayModel = {
  favourites: [],
  watchLater: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setFavourites(state, action: PayloadAction<string>) {
      const index = state.favourites.indexOf(action.payload);
      if (index > -1) {
        state.favourites.splice(index, 1)
      } else {
        state.favourites.push(action.payload)
      }
    },
    setWatchLater(state, action: PayloadAction<string>) {
      const index = state.watchLater.indexOf(action.payload);
      if (index > -1) {
        state.watchLater.splice(index, 1)
      } else {
        state.watchLater.push(action.payload)
      }
    },
  },
});
export default userSlice;
