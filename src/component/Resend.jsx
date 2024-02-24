import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/style/forgot.css"
const Resend = () => {
    return (
        <div>
            <div className="big-forgot">
                <div className="big-card">
                    <h3>Forgot Password?</h3>
                    <div className="imp">
                        <label htmlFor="" className='fold'>Enter Code sent to your Email/<br/>Phone number</label>
                        <input type="text" className='ink' />
                        <Link to="/login" type='submit' className='bist'>Recover Password</Link>
                        <Link to="/resend" type='submit' className='biste'>Resend Code</Link>
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

export default Resend