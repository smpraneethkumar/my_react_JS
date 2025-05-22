import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListAndKeys from '../Components/ListAndKeys'
import ContactUs from '../Components/ContactUs'

export class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<ListAndKeys/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    )
  }
}

export default Routing