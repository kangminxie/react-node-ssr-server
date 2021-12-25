import * as HttpStatus from 'http-status';
import { AppDispatch, AppState, AccountDetail } from '../types';

export enum authActionType {
  LOAD_CURRENT_ACCOUNT = 'LOAD_CURRENT_ACCOUNT',
}

type LoadCurrentAccountAction = {
  type: authActionType.LOAD_CURRENT_ACCOUNT,
  payload: AccountDetail,
};

export type AuthAction =
  | LoadCurrentAccountAction;

export const fetchCurrentUser = () => async (dispatch: AppDispatch, getState: AppState, api: any) => {
  const res = await api.get('/profile');
  // console.log("--------- fetchCurrentUser: ");
  // console.log("--------- fetchCurrentUser res.data: " + JSON.stringify(res.data));
  // console.log("--------- fetchCurrentUser res.status: " + res.status);
  if (res && res.status === HttpStatus.OK) {
    console.log("--------- fetchCurrentUser OK");
    const { id, name, username, email, role } = res.data;
    dispatch({
      type: authActionType.LOAD_CURRENT_ACCOUNT,
      payload: {
        id,
        name,
        username,
        email,
        role,
      }
    });
  } else {
    console.log("--------- fetchCurrentUser not OK");
    dispatch({
      type: authActionType.LOAD_CURRENT_ACCOUNT,
      payload: undefined,
    });
  }
};

export const loginUser = () => async (dispatch: AppDispatch, getState: AppState, api: any) => {
  console.log("--------- loginUser: ");
  const res = await api.post('/login', {
    username: 'dev',
    password: 'dev',
  });
  // console.log("--------- loginUser res.data: " + JSON.stringify(res));
  // console.log("--------- loginUser res.status: " + res.status);
  if (res.status === HttpStatus.OK) {
    dispatch(fetchCurrentUser());
  }
};

export const logoutCurrentUser = () => async (dispatch: AppDispatch, getState: AppState, api: any) => {
  console.log("--------- logoutCurrentUser: ");
  const res = await api.post('/logout');
  console.log("--------- logoutCurrentUser res.status: " + res.status);
  if (res && res.status === HttpStatus.OK) {
    dispatch({
      type: authActionType.LOAD_CURRENT_ACCOUNT,
      payload: undefined
    });
  }
};
