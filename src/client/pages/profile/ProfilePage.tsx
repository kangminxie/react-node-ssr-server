import * as React from 'react';
import { connect } from 'react-redux';
import { AccountDetail, AppState } from '../../types';

import './profilePage.styles.scss';

type State = {};

type Props = {
  currentAccount: AccountDetail;
};

class ProfilePage extends React.Component<Props, State> {
  render() {
    const { currentAccount } = this.props;
    if (!currentAccount) {
      return (
        <div id='profile-page'>
          <h1>Profile Page</h1>
          <div className='profile--no-content'>
            Please login to view your profile
          </div>
        </div>
      );
    }
    return (
      <div id='profile-page'>
        <h1>My Profile Page</h1>
        <div className='profile--content'>
          My AccountId: {currentAccount.id}
          My Username: {currentAccount.username} (role={currentAccount.role}) My
          DisplayName: {currentAccount.name}
          My Email: {currentAccount.email}
        </div>
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
  component: connect(mapStateToProps)(ProfilePage),
};
