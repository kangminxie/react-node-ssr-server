import * as express from 'express';
import { matchRoutes } from 'react-router-config';
import { apiProxy } from './proxyHelper';
import { rendererHtml } from './renderHelper';
import { NODE_SERVER_PORT } from './constants';
import wrappedRoutes from './routeConfigsHelper';
import { createServerStore } from './storeHelper';

const app = express();

// @ts-ignore, use public folder
app.use(express.static('public'));
// @ts-ignore, for better mapping of css file
app.use('/static', express.static('public'));

// @ts-ignore, use apiProxy to the API server
app.use('/api', apiProxy);

app.get('*', (req, res) => {
  const store = createServerStore(req);
  const { dispatch } = store;
  console.log('initial server store: ' + JSON.stringify(store.getState()));

  const matchedRoutes = matchRoutes(wrappedRoutes, req.path);
  const promises = matchedRoutes
    .map((matchedRoute) => {
      const { route } = matchedRoute;
      // ===> req.originalUrl: "/?a=2021&b=2022"
      // ===> req.query: {"a":"2021","b":"2022"}
      // ===> Match: {"route":{"path":"/","exact":true},"match":{"path":"/","url":"/","isExact":true,"params":{}}}
      return route.loadData ? route.loadData(dispatch, req.query) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, error) => {
          promise.then(resolve).catch(error);
        });
      } else {
        console.error('*** promise issue');
        return null;
      }
    });

  Promise.all(promises)
    .then(() => {
      console.log(':-) ==> all promise have been resolved');
    })
    .catch((e) => {
      console.log(
        ':-( *** there is an error during the promise with error:' + e
      );
    })
    .finally(() => {
      const htmlContent = rendererHtml(req, store);
      res.send(htmlContent);
    });
});

app.listen(NODE_SERVER_PORT, () => {
  console.log(`===> Node server is listening on port ${NODE_SERVER_PORT}`);
});
