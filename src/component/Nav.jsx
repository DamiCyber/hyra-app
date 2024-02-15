import React from 'react'
import "../assets/style/style.css"
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="bars"><img src="" alt="" /></i>
        </label>
        <label class="logo"><img src={logo} alt="" /></label>
        <ul>
          <li><Link to="/hyrahome" class=" active" href="#">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Service</Link></li>
          <li><Link to="/"></Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Nav