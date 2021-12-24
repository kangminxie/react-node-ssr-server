import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

// for frontend client
const axiosInstance = axios.create({
  baseURL: '/api'
});

const middlewareList = [thunk.withExtraArgument(axiosInstance)];
if (process.env.NODE_ENV !== 'production') {
  middlewareList.push(logger);
}
middlewareList.push(logger);

export const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__PRELOADED_STATE__,
  applyMiddleware(...middlewareList)
);

export const persistor = persistStore(store);

export default {
  store,
  persistor,
};
