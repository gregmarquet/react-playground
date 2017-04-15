import React from 'react'
import '../stylesheets/Button.css';

const Button = (props) => {
  return ( 
    <button onClick={props.handleClick}>+{props.increment}</button>    
  )
}

export default Button