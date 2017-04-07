import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Button from './Button.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Playground</h2>
        </div>

        <div className="counter">
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
