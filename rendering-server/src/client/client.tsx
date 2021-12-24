import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import wrappedRoutes from '../server/routeConfigsHelper';

const ClientApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div>{renderRoutes(wrappedRoutes)}</div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.hydrate(<ClientApp />, document.querySelector('#root'));
