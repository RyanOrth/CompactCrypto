import React from 'react';
import './App.css';
import { CandlestickChart } from './features/graph/CandlestickChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CandlestickChart></CandlestickChart>
      </header>
    </div>
  );
}

export default App;
