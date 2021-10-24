import React from 'react';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { SideTable } from '../features/sideTable/SideTable';
import './screenCSS/compactView.css'

const CompactView = () => {
  return (

    <div>
      <div style={{
        display: 'none',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '10vh'
      }}
      >
        <h1>Compact View</h1>
      </div>
      <div style={{
        height: '900px',
      }}>
        <div id={'tbbl'} style={{
          float: 'left',
        }}>
          <SideTable />
        </div>
        <div style={{
          float: 'right',
        }}>
          <CandlestickChart />
        </div>
      </div>
    </div>
  );
};

export default CompactView;