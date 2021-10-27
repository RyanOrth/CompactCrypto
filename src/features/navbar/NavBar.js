import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import {
  selectCurrentPage,
  selectDisplayFilterOptions,
  selectDisplaySearchBar,
  updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar,
} from './navBarSlice';

import styles from './NavBar.module.css';
import { Redirect, Switch } from 'react-router';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from '../../constants/action-types';

import { DropDown } from '../dropDown/DropDown';

export function NavBar(props) {
  var currentPage = useSelector(selectCurrentPage);
  var displayFilterOptions = useSelector(selectDisplayFilterOptions);
  var displaySearchBar = useSelector(selectDisplaySearchBar);
  const dispatch = useDispatch();

  return (
    <Nav>
      <NavMenu>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>{currentPage}</button>
          <div className={styles['dropdown-content']}>
            <NavLink to='/' activeStyle>
              Compact View
            </NavLink>
            <NavLink to='/data-view' activeStyle>
              Data View
            </NavLink>
            <NavLink to='/graph-view' activeStyle>
              Graph View
            </NavLink>
            <NavLink to='/account' activeStyle>
              Account
            </NavLink>
          </div>
        </div>
      </NavMenu>
      {displayFilterOptions ? (<DropDown defaultTitle={'Filters'} items={['Favorites', 'High Risk', 'Safe Bet', 'Popular Picks', 'None']} />) : null}

      <NavBtnLinkAccount to='/account'> <IoPersonSharp size={50} /> </NavBtnLinkAccount>
    </Nav>
  );
}

