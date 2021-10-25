import React from 'react';
import { Redirect } from 'react-router-dom';
import PageManager from '../features/PageManager/PageManager';
import pageManager from './pageManager';


import { DropDown } from '../features/dropDown/DropDown';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from '../constants/action-types';

const initProps = {
  items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  initValue: 'Option 1',
};

const Account = ({ appState, handleCompactViewAction, handleDataViewAction, handleGraphViewAction, handleAccountViewAction }) => {
  if (appState === COMPACT_VIEW) {
    return (
      <Redirect
        push
        to={{
          pathname: '/',
          state: {
            // var1: 'Hello',
            // var2: 7,
            // var3: 'none'
          }
        }}
      />
    );
  }

  if (appState === DATA_VIEW) {
    return (
      <Redirect
        push
        to={{
          pathname: '/data-view',
          state: {
            // var1: 'Hello',
            // var2: 7,
            // var3: 'none'
          }
        }}
      />
    );
  }

  if (appState === GRAPH_VIEW) {
    return (
      <Redirect
        push
        to={{
          pathname: '/graph-view',
          state: {
            // var1: 'Hello',
            // var2: 7,
            // var3: 'none'
          }
        }}
      />
    );
  }

  if (appState === ACCOUNT_VIEW) {
    return (
      // <Redirect
      //   push
      //   to={{
      //     pathname: '/account',
      //     state: {
      //       // var1: 'Hello',
      //       // var2: 7,
      //       // var3: 'none'
      //     }
      //   }}
      // />
      <div>
        <button>HELLO!!!</button>
      </div>
    );
  }

  return (
    <PageManager
      HandleCompactViewAction={handleCompactViewAction}
      HandleDataViewAction={handleDataViewAction}
      HandleGraphViewAction={handleGraphViewAction}
      HandleAccountViewAction={handleAccountViewAction}
      appState={appState}
    >

      <button>STUFF</button>
    </PageManager>

    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'Right',
    //     alignItems: 'Right',
    //     height: '100vh'
    //   }}
    //   >
    //     <DropDown value={initProps.initValue} items={initProps.items} />

    //     <h1>Account</h1>
    //   </div>
  );
};

export default pageManager(Account);