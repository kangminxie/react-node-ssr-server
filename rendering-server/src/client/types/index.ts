import { Dispatch } from 'redux';
import { AuthAction } from '../actions/auth';
import { FundAction } from '../actions/fund';

export interface HttpQueryParam {
  [key: string]: string | Object;
}

export type AccountDetail = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
};

export type FundInfo = {
  id: number;
  name: string;
};

export type AuthState = {
  currentAccount: AccountDetail;
};

export type FundState = {
  funds: FundInfo[];
  pageNum: number,
};

export type AppState = {
  auth: AuthState;
  fund: FundState;
};

export type AppPureAction = AuthAction | FundAction;
export type AppGetState = () => AppState;
export type AppAction =
  | AppPureAction
  | ((dispatch: AppDispatch, getState: AppGetState) => AppState);

export type AppDispatch = Dispatch<AppAction | any>;

