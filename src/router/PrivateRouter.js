import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ component: Component, auth }) => {
  return <Route>hello from the inside</Route>;
};

export default PrivateRouter;
