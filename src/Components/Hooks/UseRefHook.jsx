import React, { useRef } from 'react'

const UseRefHook = () => {
const userRef = useRef()

    const handelSubmit = (e) => {
        // e.perventDefault()
        console.log(userRef.current.value);
        
    }
  return (
    <div>
      <h2>UseRefHook</h2>

       <form action="#">
        <input type="text" ref={userRef}/>
        <button className='btn btn-outline-primary' onClick={(e)=>(handelSubmit(e))}>Submit</button>
        
        </form> 
    </div>
  )
}

export default UseRefHook