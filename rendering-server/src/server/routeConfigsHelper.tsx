import { RouteConfig } from 'react-router-config';
import App from '../client/app';
import LandingPage from '../client/pages/landing/LandingPage';
import HomePage from '../client/pages/HomePage';
import FundsPage from '../client/pages/FundsPage';
import NotFoundPage from '../client/pages/NotFoundPage';

const wrappedRoutes: RouteConfig[] = [
  {
    ...App,
    routes: [
      {
        ...LandingPage,
        path: '/',
        exact: true,
      },
      {
        ...HomePage,
        path: '/home',
        exact: true,
      },
      {
        ...FundsPage,
        path: '/funds',
        exact: true,
      },
      {
        ...NotFoundPage,
        path: '/*',
      },
    ],
  } as RouteConfig,
];

export default wrappedRoutes;
