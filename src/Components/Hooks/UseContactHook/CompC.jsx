import React, { useContext } from 'react'
import {  userData } from './UseContactHook'


const CompC = () => {
  const userDatta = useContext(userData)
  console.log(userDatta);
  
  return (
    <div>CompC
        <h2>{userDatta.name}</h2>
    </div>
  )
}

export default CompC