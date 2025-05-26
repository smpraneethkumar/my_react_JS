import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListAndKeys from '../Components/ListAndKeys'
import ContactUs from '../Components/ContactUs'
import User from '../Components/User'
import UseStateHooks from '../Components/Hooks/UseStateHooks'
import UseEffectHook from '../Components/Hooks/UseEffectHook'
import PaginaationEffect from '../Components/Hooks/PaginaationEffect'
import Timer from '../Components/Hooks/Timer'
import NoDataFound from '../Components/NoDataFound'
import UseContactHook from '../Components/Hooks/UseContactHook/UseContactHook'
import UseRefHook from '../Components/Hooks/UseRefHook'
import UseReducerHook from '../Components/Hooks/UseReducerHook'

export class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<ListAndKeys/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/usestatehook' element={<UseStateHooks/>}/>
        <Route path='/useeffecthook' element={<UseEffectHook/>}/>
        <Route path='/paginaationeffect' element={<PaginaationEffect/>}/>
        <Route path='/usecontacthook' element={<UseContactHook/>}/>
        <Route path='/userefhook' element={<UseRefHook/>}/>
        <Route path='/usereducerhook' element={<UseReducerHook/>}/>
        <Route path='/time' element={<Timer/>}/>
        <Route path='/*' element={<NoDataFound/>}/>
      </Routes>
    )
  }
}

export default Routing