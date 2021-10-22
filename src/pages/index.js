import React from 'react';
import { CandlestickChart } from '../features/graph/CandlestickChart';

const CompactView = () => {
  return (

    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '10vh'
      }}
      >
        <h1>Compact View</h1>
      </div>
      <div style={{
        height: '100vh',
        display: 'flex',
      }}>
        <table style={{
          border: '2px solid black',
          marginLeft: '8%',
          marginRight: '10%',
          marginTop: '10%',
          marginBottom: '20%',
          flex: '1',
          borderCollapse: 'collapse',
        }}>
          <tr style={{
            border: '1px solid black',
          }}>{/* This is the element for react*/}
            <td>BTC</td>
            <td>$10</td>
            <td>up5%</td>
          </tr>{/*end element*/}
          <tr style={{
            border: '1px solid black',
          }}>
            <td>DOGE</td>
            <td>$5</td>
            <td>down3%</td>
          </tr>
          <tr style={{
            border: '1px solid black',
          }}>
            <td>filler</td>
          </tr>
          <tr style={{
            border: '1px solid black',
          }}>
            <td>filler</td>
          </tr>
          <tr style={{
            border: '1px solid black',
          }}>
            <td>filler</td>
          </tr>
        </table>
        <div style={{
          flex: '2',
        }}>
          <CandlestickChart />
        </div>
      </div>
    </div>
  );
};

export default CompactView;