import * as React from 'react';
import { connect } from 'react-redux';
import { AccountDetail, AppState } from '../../types';

import './homePage.styles.scss';

type State = {};

type Props = {
  currentAccount: AccountDetail;
};

class HomePage extends React.Component<Props, State> {
  render() {
    const { currentAccount } = this.props;
    const user =
      currentAccount && currentAccount.name ? currentAccount.name : 'user';
    return (
      <div id='home-page'>
        <h1>Home Page</h1>
        <div>Welcome to the home page, {user}!</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const { auth } = state;
  return {
    currentAccount: auth.currentAccount,
  };
};

export default {
  component: connect(mapStateToProps)(HomePage),
};
