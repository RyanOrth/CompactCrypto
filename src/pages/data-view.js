import React from 'react';
import { TableViewTable } from '../features/tableViewTable/tableViewTable';

const DataView = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '10vh'
        }}
      >
        <h1>Data View</h1>
      </div>
      <div style={{
        margin: 'auto',
      }}>
        <TableViewTable />
      </div>
    </div>
  );
};

export default DataView;