import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import * as H from 'history';
import { AccountDetail, AppDispatch, AppState } from '../types';
import { loginUser, logoutCurrentUser } from '../actions/auth';

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
    location.reload();
  };

  const isLoggedIn = currentAccount && currentAccount.id;
  const authButton = isLoggedIn ? (
    <button onClick={handleClickLogoutButton}>Logout</button>
  ) : (
    <button onClick={handleClickLoginButton}>Login</button>
  );

  return (
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>
        React Node SSR
      </Link>
      <ul className='right'>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/funds'>Funds</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        )}

        <li>{authButton}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  const { auth } = state;
  return {
    currentAccount: auth.currentAccount,
  };
};

export default compose(withRouter, connect(mapStateToProps))(Navigation);
