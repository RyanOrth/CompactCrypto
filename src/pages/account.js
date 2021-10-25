import React from 'react';
import { Redirect } from 'react-router';
import Page from 'page.js';
import { ACCOUNT_VIEW } from '../constants/action-types';
import page from './page.js';

const Account = ({appState}) => {
  return appState !== ACCOUNT_VIEW ? (
    <Redirect
      push
      to={{
        pathname: appState.pathname,
        state: {

        }
      }}
    />
  ) : (
    <Page
      appState={appState}
    />
  );
};

export default page(Account);