import React, { Component } from 'react';
import '../../stylesheets/Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: (new Date()).toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState({date: (new Date()).toLocaleTimeString()}, this.setTimer);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  
  render(){
    return(

      <div>
        <h2 className='title'>Clock App</h2>
        <div className="clock">
          {this.state.date}
        </div>
      </div>
    )
  }
}


export default Clock


