import Chart from 'chart.js/auto';
import React, { useEffect, useState, useRef } from 'react';
import { getAuth } from "firebase/auth";
import "../assets/style/dashboard.css";

const Userdashboard = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Performance Chart',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [user]);

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
                    <div className="flex-bow">
                        <div className="dash">

                        </div>
                        <div className="gen">
                            <div className="user">
                                <p>Hi, <strong>{user.displayName}</strong></p>
                                <img src={user.photoURL} alt="" />
                                {/* // https://the-trivia-api.com/v2/questions note api for the quiz */}
                            </div>
                            <div className="chart">
                                <canvas ref={chartRef} width="900" height="500"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <p>No user signed in.</p>;
        }
    }
}

export default Userdashboard;
