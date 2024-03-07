import React, { useState } from 'react'
import "../assets/style/style.css"
import logo from "../assets/images/logo.png"
import bars from "../assets/images/bar.png"
import { Link } from 'react-router-dom'
const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }
  return (
    <div className='display'>
      <nav>
        <label htmlFor="check" className='checkbtn' >
          <img src={bars} alt="" />
        </label>
        <input type="checkbox" id="check" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <label class="logo">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </label>
        <ul>
          <li><Link to="/home" class=" active" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/teaching" onClick={handleLinkClick}>Our Teaching</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/login" className='btn2 button' onClick={handleLinkClick}>Log In</Link></li>
          <li><Link to="/signup" className='btn1 button' onClick={handleLinkClick}>Sign Up</Link></li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav