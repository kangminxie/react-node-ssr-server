import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Request } from 'express-serve-static-core';
import wrappedRoutes from './routeConfigsHelper';
import { Store } from 'redux';
import { Provider } from 'react-redux';

export const rendererHtml = (req: Request, store: Store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(wrappedRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  const storeState = store.getState();
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" href="static/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="static/client-bundle.style.css">
        <title>Node SSR</title>
      </head>
      <body>
         <div id="root">${content}</div>
         <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
           storeState
         )}</script>
         <script src="client-bundle.js"></script>
      </body>
      </html>
  `;
};
