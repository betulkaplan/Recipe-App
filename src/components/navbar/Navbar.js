import React from 'react';
import Nav, { Logo, Menulink, Navigator, NavItem } from './style';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav>
      <Logo to="/">{'<Beth Design>'}</Logo>
      <Navigator>
        <Menulink to="/about">About</Menulink>
        <Menulink
          to={{ pathname: 'https://github.com/betulkaplan' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Menulink>
        <Menulink to="/login">Logout</Menulink>
      </Navigator>
    </Nav>
  );
}

export default Navbar;
