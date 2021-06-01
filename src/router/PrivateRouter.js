import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ component: Component, auth, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRouter;
