import React, { useState } from 'react'

function UseStateHooks() {
const [count,setCount]= useState(0)

const incrementHandler =() => {
  setCount(preCount => preCount +1 )
  setCount(preCount => preCount +1 )
}
const decrementHandler =() => {
  setCount(preCount => preCount  -1 )
}


  return (
    <div>
      <h2>count :{count} </h2>
      <button type="button" className="btn btn-primary me-5" onClick={incrementHandler}>increment</button>
      <button type="button" className="btn btn-danger" onClick={decrementHandler}>decrement</button>
    </div>
  )
}

export default UseStateHooks