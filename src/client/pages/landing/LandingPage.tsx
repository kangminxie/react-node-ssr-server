import * as React from 'react';
import { AppDispatch, HttpQueryParam } from '../../types';

import './landingPage.styles.scss';

type LandingProps = {};

type LandingState = {};

class LandingPage extends React.Component<LandingProps, LandingState> {
  render() {
    return (
      <div id='landing-page'>
        <h1>Landing Page</h1>
        <div>This is Landing Page!</div>
      </div>
    );
  }
}

const loadData = (dispatch: AppDispatch, query: HttpQueryParam) => {
  console.log('===> Landing LoadData invoked here ===');
  return;
};

export default {
  component: LandingPage,
  loadData,
};
