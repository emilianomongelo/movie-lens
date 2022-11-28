import userSlice from './user-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const userActions = userSlice.actions;

export const setFavourites = (titleId: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setFavourites(titleId));
  };
};

export const setWatchLater = (titleId: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setWatchLater(titleId));
  };
};
