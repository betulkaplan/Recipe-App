import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';

const AuthContainer = () => (
  <div>
    <Navbar />
    <Route exact path="/" component={() => <p>Home</p>} />
    <Route exact path="/details" component={() => <p>Recipe Details</p>} />
    <Route exact path="/about" component={() => <p>About the Author</p>} />
  </div>
);

function AppRouter() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <p>{`${auth}`}</p>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return auth ? <AuthContainer /> : <Redirect to="/login" />;
          }}
        />

        <Route
          path="/login"
          exact
          component={() => <Login auth={auth} setAuth={setAuth} />}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
