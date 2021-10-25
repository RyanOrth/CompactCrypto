import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
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

export function NavBar(props) {
  var currentPage = useSelector(selectCurrentPage);
  var displayFilterOptions = useSelector(selectDisplayFilterOptions);
  var displaySearchBar = useSelector(selectDisplaySearchBar);
  const dispatch = useDispatch();

  function switchPage(selectedPage) {
    console.log('I have been clicked!!!')
    dispatch(updateCurrentPage(selectedPage));
    switch (selectedPage) {
      case COMPACT_VIEW:
        (<Redirect to='/'></Redirect>)
        break;
      case DATA_VIEW:
        (<Redirect to='/data-view'></Redirect>)
        break;
      case GRAPH_VIEW:
        (<Redirect to='/graph-view'></Redirect>)
        break;
      case ACCOUNT_VIEW:
        (<Redirect to='/account'></Redirect>)
        break;
      default:
        break;
    }
  }

  return (
    <Nav>
      <NavMenu>
          <button onClick={switchPage(COMPACT_VIEW)}>{COMPACT_VIEW}</button>
          <button onClick={switchPage(DATA_VIEW)}>{DATA_VIEW}</button>
          <button onClick={switchPage(GRAPH_VIEW)}>{GRAPH_VIEW}</button>
          <button onClick={switchPage(ACCOUNT_VIEW)}>{ACCOUNT_VIEW}</button>
      </NavMenu>
    </Nav>
  );
}

