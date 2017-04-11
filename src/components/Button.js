import React from 'react'
import '../stylesheets/Button.css';

const Button = (props) => {
  return ( 
    <button onClick={props.handleClick}>+ 1</button>    
  )
}

export default Button