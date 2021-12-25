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
        <section className='profile-header'>
          <h4>Manage my Profile</h4>
        </section>
        <div className='profile-content'>
          <div className='info-cell'>
            My AccountId: <span className='info-data'>{currentAccount.id}</span>
          </div>
          <div className='info-cell'>
            My Username:{' '}
            <span className='info-data'>{currentAccount.username}</span>
          </div>
          <div className='info-cell'>
            My Role: <span className='info-data'>{currentAccount.role}</span>
          </div>
          <div className='info-cell'>
            My Name: <span className='info-data'>{currentAccount.name}</span>
          </div>
          <div className='info-cell'>
            My Email: <span className='info-data'>{currentAccount.email}</span>
          </div>
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
