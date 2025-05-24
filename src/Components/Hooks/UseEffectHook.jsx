import React, { useEffect, useReducer, useState } from 'react'

/* 
1.) It will always calls -> Syntax : useEffect(()=>{})
2.) Only for mounting phase -> Syntax : useEffect(()=>{}, [])
3.) mounting and updating -> Syntax : useEffect(()=>{}, [countState])
4.) mounting updating and unMounting : useEffect(()=>{ cleanupFn() }, [countState])
*/

const UseEffectHook = ()=> {

  const[userData, setUserData]= useState([])

  
  useEffect(()=>{
    dataHandler()
  },[])

   const dataHandler = async () =>{
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await reponse.json()
    setUserData( (preState)=> data)
    // console.log(data);
    // console.log(preState);
    
    
  }

  return (
    <div>UseEffectHook

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>UserName</th>
            <th scope='col'>email</th>
          </tr>
        </thead>
        <tbody>
          {
            userData &&  userData.map((userEle,i)=>(
              <tr key={userEle.id}>
                <td>{userEle.id}</td>
                <td>{userEle.name}</td>
                <td>{userEle.username}</td>
                <td>{userEle.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UseEffectHook