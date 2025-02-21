import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../ClassComp'

export class Routing extends Component {
  render() {
    return (
     
        <Routes>
            <Route path='/' element={<ClassComp/>}/>                              
        </Routes>
     
    )
  }
}

export default Routing