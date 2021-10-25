import React from 'react';
import { ACCOUNT_VIEW } from '../constants/action-types';

import { NavBar } from '../features/navBar/NavBar';

const Account = () => {
  
  return (
    <div>
      <NavBar currentPage={ACCOUNT_VIEW} displayFilterOptions={false} displaySearchBar={false}/>
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