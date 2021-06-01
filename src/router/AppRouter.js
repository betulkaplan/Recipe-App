import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import About from '../components/about/About';
import Details from '../components/details/Details';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';
import PrivateRouter from './PrivateRouter';

function AppRouter() {
  const [auth, setAuth] = useState(false);

  const AuthContainer = () => (
    <div style={{ border: '1px solid gray' }}>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          auth={auth}
          render={() =>
            auth ? (
              <Home />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                }}
              />
            )
          }
        />
        <Route path="/about" exact auth={auth} component={About} />
        <Route
          path="/details"
          exact
          auth={auth}
          render={(props) => {
            return auth ? (
              <Details props={props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                }}
              />
            );
          }}
        />
      </Switch>
    </div>
  );

  return (
    <Router>
      <p>{`${auth}`}</p>
      <Switch>
        <Route path="/login" render={() => <Login setAuth={setAuth} />} />
        <Route path="/" component={AuthContainer} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
