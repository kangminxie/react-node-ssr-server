import * as React from 'react';

type State = {};

type Props = {};

class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <div id='home-page'>
        <h1>Home Page</h1>
        <div>This is Home Page!</div>
      </div>
    );
  }
}

export default {
  component: HomePage,
};
