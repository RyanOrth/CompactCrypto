import React from 'react';
import _ from 'lodash';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from '../../constants/action-types';
import { NavMenu } from '../navbar/NavbarElements';

const PageManager = ({
  HandleCompactViewAction,
  HandleDataViewAction,
  HandleGraphViewAction,
  HandleAccountViewAction,
  appState,
  locationState,
}) => {
  return (
    <section >
      {/* <NavMenu> */}
      {/* <div class='dropdown'> */}
      {/* <button class='dropbtn'>View</button> */}
      {/* <div class='dropdown-content'> */}
      <button onClick={HandleCompactViewAction}>
        <span>{COMPACT_VIEW}</span>
        {appState === COMPACT_VIEW ? (
          <span/>
        ) : null}
      </button>
      <button onClick={HandleDataViewAction}>
        <span>{DATA_VIEW}</span>
        {appState === DATA_VIEW ? (
          <span/>
        ) : null}
      </button>
      <button onClick={HandleGraphViewAction}>
        <span>{GRAPH_VIEW}</span>
        {appState === GRAPH_VIEW ? (
          <span/>
        ) : null}
      </button>
      <button onClick={HandleAccountViewAction}>
        <span>{ACCOUNT_VIEW}</span>
        {appState === ACCOUNT_VIEW ? (
          <span/>
        ) : null}
      </button>
      {/* </div> */}
      {/* </div> */}
      {/* </NavMenu> */}
      {locationState && (
        <pre>
          <span>Here's the info passed in: </span>
          {_.map(locationState, (val, key) => (
            <span key={key}>
              {' '}
              {key} is <span >{val}</span>{' '}
            </span>
          ))}
        </pre>
      )}
    </section>
  );
};

export default PageManager;