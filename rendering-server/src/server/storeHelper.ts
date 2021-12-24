import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';
import { API_SERVER_BASE_URL } from './constants';
import { Request } from 'express-serve-static-core';

// server side do not have preloadedState
// take the cookie from browser
export const createServerStore = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: API_SERVER_BASE_URL,
    headers: { cookie: req.get('cookie') || '' }
  });

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};
