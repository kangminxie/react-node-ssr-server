import { AppDispatch, FundInfo, AppState } from '../types';

export enum fundActionType {
  LOAD_ALL_FUNDS = 'LOAD_ALL_FUNDS',
  SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
}

type LoadAllFundsAction = {
  type: fundActionType.LOAD_ALL_FUNDS,
  payload: FundInfo[],
};

type SetPageNumberAction = {
  type: fundActionType.SET_PAGE_NUMBER,
  payload: number,
};

export type FundAction =
  | LoadAllFundsAction
  | SetPageNumberAction;

export const fetchAllFunds = (pageNum: number) => async (dispatch: AppDispatch, getState: AppState, api: any) => {
  const result = await api.get('/funds');
  dispatch({
    type: fundActionType.SET_PAGE_NUMBER,
    payload: pageNum,
  })
  dispatch({
    type: fundActionType.LOAD_ALL_FUNDS,
    payload: result.data
  });
};
