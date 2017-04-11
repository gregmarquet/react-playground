import React, { Component } from 'react';
import '../stylesheets/CounterApp.css';
import Button from './Button.js';
import Counter from './Counter.js';

class CounterApp extends Component {
  render(){
    return(
      <div className='counter-app'>
        <Button />
        <Counter />
      </div>
    )
  }
}

export default CounterApp