import { RouteConfig } from 'react-router-config';
import App from '../client/app';
import LandingPage from '../client/pages/landing/LandingPage';
import HomePage from '../client/pages/home/HomePage';
import FundsPage from '../client/pages/funds/FundsPage';
import ProfilePage from '../client/pages/profile/ProfilePage';
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
        ...ProfilePage,
        path: '/profile',
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
