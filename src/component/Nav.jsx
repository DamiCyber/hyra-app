import React from 'react'
import "../assets/style/style.css"
import logo from "../assets/images/logo.png"
import bars from "../assets/images/bar.png"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='display'>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="bars"><img src={bars} alt="" /></i>
        </label>
        <label class="logo"><img src={logo} alt="" /></label>
        <ul>
          <li><Link to="/" class=" active" href="#">Home</Link></li>
          <li><Link to="/teaching">Our Teaching</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/signup" className='btn1 button'>Sign Up</Link></li>
          <li><Link to="/login" className='btn2 button'>Log In</Link></li>
        </ul>
        
      </nav>
     
    </div>
  )
}

export default Nav