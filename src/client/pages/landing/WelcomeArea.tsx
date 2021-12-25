import * as React from 'react';

const WelcomeArea = () => {
  return (
    <React.Fragment>
      <h1>Welcome, User!</h1>
      <div className='para-content'>
        This is the React-Redux UI for Node.js Rendering server
        <br />
        It is created by manual webpack configuration and Typescript
      </div>
    </React.Fragment>
  );
};

export default WelcomeArea;
