import React, { useReducer } from 'react'

const reducer = (currVal, action ) => {
    switch(action){
        case "increment" : 
        return currVal +1
        case "decrement" : 
        return currVal -1
        default:
            return currVal
        
    }
}

const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    console.log(count);
    console.log(dispatch);
    
    
  return (
    <div>
        <h2>UseReducerHook</h2>
        <h2>{count}</h2>
        <button onClick={()=> dispatch("increment")} className='btn btn-primary'>Increment</button>
        <button onClick={()=> dispatch("decrement")} className='btn btn-danger'>Decrement</button>
    </div>
  )
}

export default UseReducerHook