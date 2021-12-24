import * as React from 'react';
import Navigation from './components/Navigation';
import { Switch } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { AppDispatch, HttpQueryParam } from './types';
import { fetchCurrentUser } from './actions/auth';

interface AppProp {
  route: {
    routes: RouteConfig[];
  };
}

const App = ({ route }: AppProp) => {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>{renderRoutes(route.routes)}</Switch>
    </React.Fragment>
  );
};

const loadData = (dispatch: AppDispatch, query: HttpQueryParam) => {
  console.log('===> APP load data fetchCurrentUser ===');
  return dispatch(fetchCurrentUser());
};

export default {
  component: App,
  loadData,
};
