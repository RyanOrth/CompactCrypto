import React from 'react';
import { ACCOUNT_VIEW } from '../constants/action-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentPage,
  selectDisplayFilterOptions,
  selectDisplaySearchBar,
  updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar,
} from '../features/navBar/navBarSlice';

import { NavBar } from '../features/navBar/NavBar';

const Account = () => {
  var currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(ACCOUNT_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplaySearchBar(false));

  return (
    <div>
      <NavBar currentPage={ACCOUNT_VIEW} displayFilterOptions={false} displaySearchBar={false} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        <h1>Account</h1>
      </div>
    </div>
  );
};

export default Account;