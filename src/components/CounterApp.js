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
  handleClick() {
    this.setState({counter: this.state.counter + 1})
  }
  render(){
    return(
      <div className='counter-app'>
        <Button handleClick={this.handleClick.bind(this)} />
        <Counter totalCount={this.state.counter} />
      </div>
    )
  }
}

export default CounterApp