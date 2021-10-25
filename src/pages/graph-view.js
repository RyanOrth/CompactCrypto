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
      <CandlestickChart width={800} height={400} />
    </div>
  );
};

export default GraphView;