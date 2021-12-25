import * as React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import WelcomeArea from './WelcomeArea';
import { AppDispatch, HttpQueryParam } from '../../types';

import './landingPage.styles.scss';

type LandingProps = {};

type LandingState = {};

class LandingPage extends React.Component<LandingProps, LandingState> {
  render() {
    return (
      <div id='landing-page'>
        <Jumbotron>
          <Container>
            <WelcomeArea />
          </Container>
        </Jumbotron>
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
