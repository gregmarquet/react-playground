import React, { Component } from 'react';
import '../stylesheets/CounterApp.css';
import Button from './Button.js';
import Counter from './Counter.js';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleClick(increment) {
    this.setState({counter: this.state.counter + 1 })
  }
  render(){
    return(
      <div className='counter-app'>
        <h4>Click a button to add to the total count.</h4>
        <Button handleClick={this.handleClick.bind(this)} increment={1} />
        <Button handleClick={this.handleClick.bind(this)} increment={5} />
        <Button handleClick={this.handleClick.bind(this)} increment={10} />
        <Button handleClick={this.handleClick.bind(this)} increment={100} />
        <Counter totalCount={this.state.counter} />
      </div>
    )
  }
}

export default CounterApp