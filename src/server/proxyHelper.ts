import * as proxy from 'express-http-proxy';
import { RequestOptions } from 'http';
import { API_SERVER_BASE_URL, RENDERING_SEVER_URL } from './constants';

const options: proxy.ProxyOptions = {
  proxyReqOptDecorator: (proxyReqOpts: RequestOptions) => {
    proxyReqOpts.headers['x-forwarded-host'] = RENDERING_SEVER_URL;
    return proxyReqOpts;
  }
};

export const apiProxy = proxy(API_SERVER_BASE_URL, options);
