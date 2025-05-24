import React from 'react'
import CompB from './CompB'

const CompA = ({user}) => {
  return (
    <div>CompA
        <CompB user={user}/>
    </div>
  )
}

export default CompA
