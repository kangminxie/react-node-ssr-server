import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { AccountDetail, AppDispatch, AppState } from '../types';
import { loginUser, logoutCurrentUser } from '../actions/auth';
import * as H from 'history';

type Props = {
  dispatch: AppDispatch;
  currentAccount: AccountDetail;
  history: H.History;
  location: H.Location;
};

const Navigation: React.FC<Props> = (props) => {
  const { currentAccount, dispatch, history } = props;

  const handleClickLoginButton = () => {
    dispatch(loginUser());
    location.reload();
  };

  const handleClickLogoutButton = () => {
    dispatch(logoutCurrentUser());
    history.push('/');
  };

  const authButton =
    currentAccount && currentAccount.id ? (
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
