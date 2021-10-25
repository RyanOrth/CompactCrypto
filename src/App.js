import React from 'react';
import './App.css';
import Navbar from './features/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CompactView from './pages';
import DataView from './pages/data-view';
import GraphView from './pages/graph-view';
import OldAccount from './pages/old-account';

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
          <Route exact path='/'  component={CompactView} />
          <Route path='/data-view' component={DataView} />
          <Route path='/graph-view' component={GraphView} />
          <Route path='/old-account' component={OldAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
