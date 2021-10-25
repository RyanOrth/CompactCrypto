import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import {
  ACCOUNT_VIEW,
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW
} from '../constants/action-types';
import { ViewDropDownMenu } from '../features/viewDropDownMenu/ViewDropDownMenu';

let inputProps = {
  items: [COMPACT_VIEW, DATA_VIEW, GRAPH_VIEW, ACCOUNT_VIEW],
  value: COMPACT_VIEW,
};

const OldAccount = () => {
  return (
    <div>
      <ViewDropDownMenu value={COMPACT_VIEW} items={[COMPACT_VIEW, DATA_VIEW, GRAPH_VIEW, ACCOUNT_VIEW]} />
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

export default OldAccount;