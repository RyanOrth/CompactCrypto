import React from 'react';
import { CandlestickChart } from '../features/graph/CandlestickChart';

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
      <CandlestickChart/>
      </div>
  );
};

export default GraphView;