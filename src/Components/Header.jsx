import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" >Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >List & keys</Link>
        </li>
        <li class="nav-item">
          <Link  to="/contactus" class="nav-link" >Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/user" class="nav-link" >User</Link>
        </li>
        <li class="nav-item">
        <Link to="/usestatehook" class="nav-link active" aria-current="page" >UseStateHook</Link>
        </li>
        <li class="nav-item">
        <Link to="/useeffecthook" class="nav-link active" aria-current="page" >UseEffectHook</Link>
        </li>
        <li class="nav-item">
        <Link to="/paginaationeffect" class="nav-link active" aria-current="page" >paginaationEffect</Link>
        </li>
        <li class="nav-item">
        <Link to="/time" class="nav-link active" aria-current="page" >Time</Link>
        </li>
        <li class="nav-item">
        <Link to="/usecontacthook" class="nav-link active" aria-current="page" >UsecontactHook</Link>
        </li>
        <li class="nav-item">
        <Link to="/userefhook" class="nav-link active" aria-current="page" >UseRefHook</Link>
        </li><li class="nav-item">
        <Link to="/usereducerhook" class="nav-link active" aria-current="page" >UseReducerHook</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Header