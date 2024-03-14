import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import "../assets/style/dashboard.css";

const Userdashboard = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div>
                <div className="cover">
                    <div className="imag">
                        <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1707921289/logo_ozfrac.png" alt="" />
                    </div>
                    <div className="loadingspinner">
                        <div id="square1"></div>
                        <div id="square2"></div>
                        <div id="square3"></div>
                        <div id="square4"></div>
                        <div id="square5"></div>
                    </div>
                </div>
            </div>
        );
    } else {
        if (user) {
            return (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <img src={user.photoURL} alt="" />
                    <div className="icon"></div>
                    {/* // https://the-trivia-api.com/v2/questions note api for the quiz */}
                </div>
            );
        } else {
            return <p>No user signed in.</p>;
        }
    }

}

export default Userdashboard; 