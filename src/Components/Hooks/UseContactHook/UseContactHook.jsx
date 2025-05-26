import React, { createContext } from 'react'
import CompA from './CompA'

 export const userData = createContext()

const UseContactHook = () => {
  return (
    <div>UseContactHook
      <userData.Provider value={{name:"praneeth"}}>
       <CompA/>
      </userData.Provider>
    </div>
  )
}

export default UseContactHook