import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)

    useEffect(()=>{
        const count = setInterval(()=>{
            setTime(time + 1)
        },1000)
        return () => {
            console.log("the time is stopeed");
            
            clearInterval(count)
        }
    },[time] )
  return (
    <div>
        <h2>Time: {time}</h2>
    </div>
  )
}

export default Timer