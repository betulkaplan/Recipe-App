import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginPage, { LoginForm, LoginPic } from './style';
import Img from '../../assets/meal2.svg';

function Login({ auth, setAuth }) {
  let his = useHistory();
  return (
    <LoginPage>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          //setAuth(true);
          his.push('/');
        }}
      >
        <LoginPic src={Img} />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </LoginForm>
    </LoginPage>
  );
}

export default Login;
