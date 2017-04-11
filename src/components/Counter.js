import React from 'react'


const Counter = (props) => {
  return (
    <div className="Counter-div">
      <p>The total count is: {props.totalCount}</p>
    </div>
  )
}

export default Counter