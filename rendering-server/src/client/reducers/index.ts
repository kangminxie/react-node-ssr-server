import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import fundReducer from './fundReducer'
import { AppState } from '../types';

const persistConfig = {
  key: 'rootTest',
  storage,
  whitelist: [
    '',
  ],
};

const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  fund: fundReducer,
});

export default persistReducer(persistConfig, rootReducer);
