import * as React from 'react';
import { FundInfo, AppDispatch, AppState, HttpQueryParam } from '../../types';
import { connect } from 'react-redux';
import { fetchAllFunds } from '../../actions/fund';

import './fundsPage.styles.scss';

type State = {};

type Props = {
  dispatch: AppDispatch;
  funds: FundInfo[];
  pageNum: number;
};

class HomePage extends React.Component<Props, State> {
  componentDidMount() {
    const { dispatch, pageNum } = this.props;
    dispatch(fetchAllFunds(pageNum));
  }

  render() {
    const { funds } = this.props;
    return (
      <div id='funds-page'>
        <h1>Funds Page</h1>
        <div>Total number of funds: {funds.length}</div>
        <ul>
          {funds &&
            funds.map((each) => {
              return <li key={each.id}>{`${each.id} | ${each.name}`}</li>;
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    funds: state.fund.funds,
    pageNum: state.fund.pageNum,
  };
};

const loadData = (dispatch: AppDispatch, query: HttpQueryParam) => {
  const { page } = query;
  let pageNum = 0;
  try {
    if (typeof page === 'number' && page >= 0) {
      pageNum = page;
    } else if (typeof page === 'string') {
      pageNum = parseInt(page, 10);
    }
  } catch (e) {
    pageNum = 0;
  }
  return dispatch(fetchAllFunds(pageNum));
};

export default {
  component: connect(mapStateToProps)(HomePage),
  loadData,
};
