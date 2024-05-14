import React from 'react';
import { Link } from 'react-router-dom'; 
import Frame4Svg from '../assets/Frame 4.svg';


const LoginPage = () => {
 

  const handleGoogleLogin = () => {
    // Redirect the user to Google authentication page
    window.location.href = 'https://accounts.google.com/';
  };
 
  return (
    <div className="login-container">
      <div className="login-card">
        <Link to={'/'}>
      <img src={Frame4Svg} alt="Frame 4"  />
        </Link>
        <h1>Welcome Back</h1>
        <div className="signup-link">
          <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
        </div>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="or-divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <button className="google-login-btn" onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;