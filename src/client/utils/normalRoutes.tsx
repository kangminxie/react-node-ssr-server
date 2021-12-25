import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HomePage from '../pages/home/HomePage';
import LandingPage from '../pages/landing/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';

const NormalRoutes = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage.component} />
        <Route exact path="/home" component={HomePage.component} />
        <Route path="/*" component={NotFoundPage.component} />
      </Switch>
    </React.Fragment>
  );
};

export default NormalRoutes;
