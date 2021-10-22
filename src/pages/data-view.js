import React from 'react';

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
        height: '90vh',
        display: 'flex',
        flexDirection: 'row',
      }}>
        <table style={{
          flex: '1',
          borderCollapse: 'collapse',
          border: '2px solid black',
          margin: '5%',
        }}>
          <tr style={{ height: '20px', }}>
            <th>star</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Value</th>
            <th>+/-</th>
            <th>Number of trades</th>
            <th>Brokers</th>
          </tr>
          <tr style={{
            border: '2px solid black',
            height: '20px',
          }}>
            <td>star</td>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>$10</td>
            <td>^^ 5%</td>
            <td>20,000</td>
            <td>Binance</td>
          </tr>
          <tr style={{
            border: '2px solid black',
            height: '20px',
          }}>
            <td>star</td>
            <td>DOGE</td>
            <td>Dogecoin</td>
            <td>$5</td>
            <td>VV 20%</td>
            <td>10,000</td>
            <td>robin</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DataView;