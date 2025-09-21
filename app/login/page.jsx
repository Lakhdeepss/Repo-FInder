import React from 'react';
import './login.css';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="lightning-container">
                <div className="lightning white"></div>
                <div className="lightning red"></div>
            </div>
            <div className="login-box">
                <div className="login-header">
                    <h2>Login</h2>
                </div>
                <form className="login-form">
                    <div className="input-group">
                        <input type="text" id="username" required />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="login-footer">
                    <a href="#">Forgot Password?</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
