import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/style/signup.css"
const Page = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/home")
        }, 4000);
    }, []);

    if (loading) {
        return <div>
            <div className="center">
                <div className="imag">
                    <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1707921289/logo_ozfrac.png" alt="" />
                </div>
                <div class="loader">
                    <div class="circle">
                        <div class="dot"></div>
                        <div class="outline"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                        <div class="outline"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                        <div class="outline"></div>
                    </div>
                    <div class="circle">
                        <div class="dot"></div>
                        <div class="outline"></div>
                    </div>
                </div>
            </div>
        </div>;
    }
    return (
        <div></div>
    )
}

export default Page