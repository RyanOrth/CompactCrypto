import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Navbar from './features/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompactView from './pages';
import DataView from './pages/data-view';
import GraphView from './pages/graph-view';
import Account from './pages/account';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //   </header>
    // </div>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={CompactView} />
          <Route path='/data-view' component={DataView} />
          <Route path='/graph-view' component={GraphView} />
          <Route path='/account' component={Account} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
