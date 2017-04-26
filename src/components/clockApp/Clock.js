import React, { Component } from 'react';
import '../../stylesheets/Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: (new Date()).toLocaleTimeString()
    };
  }
  render(){
    return(
      <div className="clock">
        {this.state.date}
      </div>
    )
  }
}


export default Clock