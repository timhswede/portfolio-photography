import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './AppBarElements';
import { default as logo } from '../images/LogoNav.svg';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo}/>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to='/recent' activeStyle>
            Recent Work
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;