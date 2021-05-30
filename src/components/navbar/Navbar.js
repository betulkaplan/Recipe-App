import React from 'react';
import Nav, { Logo, Navigator, NavItem } from './style';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav>
      <Logo>Beth Design----</Logo>
      <Navigator>
        <NavItem>
          <Link to="/about" rel="noopener noreferrer">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to={{ pathname: 'https://github.com/betulkaplan' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Login">Logout</Link>
        </NavItem>
      </Navigator>
    </Nav>
  );
}

export default Navbar;
