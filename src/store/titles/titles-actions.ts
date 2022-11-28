import titlesSlice from './titles-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { TitleModel } from '../../models/redux-models';
import { SearchParams } from '../../types';
import ImdbService from '../../service/imdbService';

export const titlesActions = titlesSlice.actions;

export const reset = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(titlesActions.reset());
  };
};

export const searchTitle = (searchParams: SearchParams): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(titlesActions.setLoading(true));
    const response: TitleModel[] = await ImdbService.searchTitle(searchParams);
    dispatch(titlesActions.setTitles(response));
    dispatch(titlesActions.setLoading(false));
  };
};

export const getTitle = (titleId: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().titles?.title?.id !== titleId) {
      dispatch(titlesActions.setLoading(true));
      const response: TitleModel | null = await ImdbService.getTitle(titleId);
      dispatch(titlesActions.setTitle(response));
      dispatch(titlesActions.setLoading(false));
    }
  };
};

export const getTitles = (titleIds: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(titlesActions.setLoading(true));
    const promises = titleIds.map((titleId) => ImdbService.getTitle(titleId));
    const responses: any | null = await Promise.all(promises);
    dispatch(titlesActions.setTitles(responses));
    dispatch(titlesActions.setLoading(false));
  };
};
