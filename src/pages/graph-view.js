import React from 'react';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { GraphViewTable } from '../features/graphViewTable/GraphViewTable';
import './screenCSS/graphView.css';

const GraphView = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
      >
      <h1>Graph View</h1>
      <div id={'tbbl'} style={{ overflow: 'hidden', float: 'left', height: '274px', border: '1px solid #ddd' }}>
          <GraphViewTable />
        </div>
        <div style={{
          float: 'right',
        }}>
          <CandlestickChart />
        </div>
      </div>
  );
};

export default GraphView;