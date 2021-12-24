import { FundState } from '../types';
import { FundAction, fundActionType } from '../actions/fund';

const INIT_STATE: FundState = {
  funds: [],
  pageNum: 0,
};

export default (state = INIT_STATE, action: FundAction): FundState => {
  switch (action.type) {
    case fundActionType.LOAD_ALL_FUNDS:
      return {
        ...state,
        funds: action.payload,
      };
    case fundActionType.SET_PAGE_NUMBER:
      return {
        ...state,
        pageNum: action.payload,
      };
    default:
      return state;
  }
};
