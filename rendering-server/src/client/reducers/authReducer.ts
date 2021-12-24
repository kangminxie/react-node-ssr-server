import { AuthState } from '../types';
import { AuthAction, authActionType } from '../actions/auth';

const INIT_STATE: AuthState = {
  currentAccount: undefined,
};

export default (state = INIT_STATE, action: AuthAction): AuthState => {
  switch (action.type) {
    case authActionType.LOAD_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    default:
      return state;
  }
};
