import React from 'react'
import "../assets/style/forgot.css"
import { Link, useNavigate } from 'react-router-dom'
const Forgotten = () => {
  let navigate = useNavigate()
  navigate("/login")
  return (
    <div>
      <div className="big-forgot">
        <div className="big-card">
          <h3>Forgot Password?</h3>
          <div className="imp">
            <label htmlFor="">Enter your Email/ Phone number</label>
            <input type="text" className='ink' />
            <Link to="/resend" type='submit' className='bist'>Send Code</Link>
          </div>
        </div>
        <div className="imgforgot">
          <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1708595010/image_250_qxm4kb.png" alt="" />
        </div>
      </div>
      <div className="back">

      </div>
      <div className="last">
        <h3>2023 Copyrights: Hyra</h3>
      </div>
    </div>
  )
}

export default Forgotten