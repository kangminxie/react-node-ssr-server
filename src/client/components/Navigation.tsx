import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import * as H from 'history';
import { Navbar } from 'react-bootstrap';
import { AccountDetail, AppDispatch, AppState } from '../types';
import { loginUser, logoutCurrentUser } from '../actions/auth';

import './navigation.styles.scss';

type Props = {
  dispatch: AppDispatch;
  currentAccount: AccountDetail;
  history: H.History;
  location: H.Location;
};

const Navigation: React.FC<Props> = (props) => {
  const { currentAccount, dispatch, history } = props;

  const handleClickLoginButton = async () => {
    await dispatch(loginUser());
    location.reload();
  };

  const handleClickLogoutButton = async () => {
    await dispatch(logoutCurrentUser());
    history.push('/');
  };

  const getClass = (curr: string) => {
    const isActive = props.location.pathname.startsWith('/' + curr);
    return 'my-nav-item ' + (isActive ? 'is-active' : '');
  };

  const isLoggedIn = currentAccount && currentAccount.id;
  return (
    <Navbar bg='dark' variant='dark' className='my-navigation'>
      <section className='left-section'>
        <div className='my-brand'>
          <Link to='/'>React Node SSR</Link>
        </div>
        <div className={getClass('home')}>
          <Link to='/home'>Home</Link>
        </div>
        <div className={getClass('fund')}>
          <Link to='/funds'>Funds</Link>
        </div>
      </section>
      <section className='middle-section'>
        {isLoggedIn && (
          <div className={getClass('profile')}>
            <Link to='/profile'>Profile</Link>
          </div>
        )}
      </section>
      <section className='right-section'>
        {isLoggedIn ? (
          <div className={getClass('logout')}>
            <Link to='' onClick={handleClickLogoutButton}>
              Logout
            </Link>
          </div>
        ) : (
          <div className={getClass('login')}>
            <Link to='' onClick={handleClickLoginButton}>
              Login
            </Link>
          </div>
        )}
      </section>
    </Navbar>
  );
};

const mapStateToProps = (state: AppState) => {
  const { auth } = state;
  return {
    currentAccount: auth.currentAccount,
  };
};

export default compose(withRouter, connect(mapStateToProps))(Navigation);
