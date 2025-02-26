import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComp from '../ClassComp'
import Dummyclass from '../Dummyclass'

export class Routing extends Component {
  render() {
    return (
     
        <Routes>
            <Route path='/' element={<ClassComp/>}/>   
            <Route path='Dummyclass' element={<Dummyclass/>}/>                   
        </Routes>
     
    )
  }
}

export default Routing