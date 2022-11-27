import titleSlice from './title-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { TitleModel } from '../models/redux-models';
import { FormData } from '../types';
import ImdbService from '../service/imdbService';

export const titleActions = titleSlice.actions;

export const searchTitle = (formData: FormData): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().title.titles.length === 0) {
      const response: TitleModel[] = await ImdbService.searchTitle(formData);
      dispatch(titleActions.setTitles(response));
    }
  };
};

export const getTitle = (titleId: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().title.title === null) {
      const response: TitleModel | null = await ImdbService.getTitle(titleId);
      dispatch(titleActions.setTitle(response));
    }
  };
};
