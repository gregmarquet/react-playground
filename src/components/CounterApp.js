import React, { Component } from 'react';
import '../stylesheets/CounterApp.css';
import Button from './Button.js';

class CounterApp extends Component {
  render(){
    return(
      <div className='counter-app'>
        <Button />
      </div>
    )
  }
}

export default CounterApp