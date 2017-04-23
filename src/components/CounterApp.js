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
    this.setState({counter: this.state.counter + increment })
  }
  counterReset() {
    this.setState({counter: 0 })
  }
  render(){
    return(
      <div className='counter-app'>
        <h2 className='title'>Counter App</h2>
        <h4>Click a button to add to the total count.</h4>
        <Button handleClick={this.handleClick.bind(this, 1)} label={'+1'} />
        <Button handleClick={this.handleClick.bind(this, 5)} label={'+5'} />
        <Button handleClick={this.handleClick.bind(this, 10)} label={'+10'} />
        <Button handleClick={this.handleClick.bind(this, 100)} label={'+100'} />
        <Button handleClick={this.counterReset.bind(this)} label={'reset'} />
        <Counter totalCount={this.state.counter} />
      </div>
    )
  }
}

export default CounterApp