import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer';
import React from 'react';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW
} from '../../constants/action-types';

import { IoPersonSharp } from 'react-icons/io5';


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLinkAccount,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div className='dropdown'>
            <button className='dropbtn'>View</button>
            <div className='dropdown-content'>
              <NavLink to='/'>
                Compact View
              </NavLink>
              <NavLink to='/data-view'>
                Data View
              </NavLink>
              <NavLink to='/graph-view'>
                Graph View
              </NavLink>
              <NavLink to='/old-account'>
                Account
              </NavLink>
            </div>
          </div>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavBtnLinkAccount to='/old-account'> <IoPersonSharp size={50} /> </NavBtnLinkAccount>
      </Nav>
    </>
  );
};

export default Navbar;