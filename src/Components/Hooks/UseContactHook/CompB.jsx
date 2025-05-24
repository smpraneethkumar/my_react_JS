import React from 'react'
import CompC from './CompC'

const CompB = ({user}) => {
  return (
    <div>CompB
        <CompC user={user}/>
    </div>
  )
}

export default CompB