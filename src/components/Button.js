import React from 'react'
import '../stylesheets/Button.css';

const Button = (props) => {
  return (
    <div className="button-div">
      <h4>Click a button to add to the total count.</h4>
      <button onClick={props.handleClick}>+ 1</button>
    </div>
  )
}

export default Button