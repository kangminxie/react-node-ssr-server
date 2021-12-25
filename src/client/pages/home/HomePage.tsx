import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
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
        <section className='home-header'>
          <h4>Welcome, {user}!</h4>
        </section>
        <div className='home-content'>
          <div className='content-title'>Liverpool Main Content</div>
          <div className='my-table-wrapper mx-4'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7</td>
                  <td>James</td>
                  <td>Milner</td>
                  <td>@jamesm</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Jordan</td>
                  <td>Henderson</td>
                  <td>@jordanj</td>
                </tr>
              </tbody>
            </Table>
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
  component: connect(mapStateToProps)(HomePage),
};
