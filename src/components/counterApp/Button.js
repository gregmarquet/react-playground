import React, { Component } from 'react'
import '../../stylesheets/Button.css';

class Button extends Component {
  render(){
    return ( 
      <button onClick={this.props.handleClick}>{this.props.label}</button> 

    )
  }
  
}

export default Button