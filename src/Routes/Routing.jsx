import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListAndKeys from '../Components/ListAndKeys'
import ContactUs from '../Components/ContactUs'
import User from '../Components/User'
import UseStateHooks from '../Components/Hooks/UseStateHooks'

export class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<ListAndKeys/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/usestatehook' element={<UseStateHooks/>}/>

      </Routes>
    )
  }
}

export default Routing