import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import Routes from './router'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
    
  );
}

export default App;
