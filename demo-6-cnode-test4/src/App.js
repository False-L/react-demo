import React, { Component } from 'react';
import logo from './img/logo.svg';
import cnodelogo from './img/cnodelogo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={cnodelogo} className="App-cnodelogo" alt="logo" />
          <h2>Welcome to React-Cnode</h2>
        </div>
      </div>
    );
  }
}

export default App;
