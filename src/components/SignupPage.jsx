import React, { useState } from 'react';
import Frame4Svg from '../assets/Frame 4.svg';
import { Link } from 'react-router-dom'; 


const SignupPage = () => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }

  return (
    <div className="signup-container">
      
    <div className='signup-card'>
      <Link to={'/'}>
    <img src={Frame4Svg} alt="Frame 4" />
      </Link>
    <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
          
          <div className="form-group">
          <input type="email" placeholder="Enter your email" value={state.email} onChange={handleChange} />
          </div>
          
          <div className="form-group">
          <input type="password" placeholder="Enter your password" value={state.password} onChange={handleChange} />
          </div>
        
          <button type="submit" className="login-btn">Create Account</button>
      </form>
      <div className='register-link'>
      <Link to='/login' className='register-link'>Already Registered? Login</Link>

      </div>
      
    </div>
    </div>
  );
}

export default SignupPage;