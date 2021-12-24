import * as proxy from 'express-http-proxy';
import { RequestOptions } from 'http';
import { NODE_SERVER_PORT, API_SERVER_BASE_URL } from './constants';

const options: proxy.ProxyOptions = {
  proxyReqOptDecorator: (proxyReqOpts: RequestOptions) => {
    proxyReqOpts.headers['x-forwarded-host'] = `localhost:${NODE_SERVER_PORT}`;
    return proxyReqOpts;
  }
};

export const apiProxy = proxy(API_SERVER_BASE_URL, options);
