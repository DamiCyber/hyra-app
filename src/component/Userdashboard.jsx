import React, { useEffect, useState } from 'react'
import "../assets/style/dashboard.css"
import { useNavigate } from 'react-router-dom';
const Userdashboard = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }, []);

    if (loading) {
        return <div>
            <div className="cover">
                <div class="loadingspinner">
                    <div id="square1"></div>
                    <div id="square2"></div>
                    <div id="square3"></div>
                    <div id="square4"></div>
                    <div id="square5"></div>
                </div>
            </div>

        </div>
    }
    return (
        <div>Userdashboard</div>
    )
}

export default Userdashboard