import React from 'react';
import { Link } from 'react-router-dom'; 
import Frame7 from '../assets/Frame 7.png';
import Footer from './Footer';
//import "./LandingPage.css";

import Group13 from '../assets/Group 13.png';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="logo-container">
          <img src={Frame7} alt="Title" className='frame-image'/>
        </div>
        <h1>Your <span className='gradient-text'>Mental Health</span><br />Companion.<br/>Anytime,Anywhere.</h1>
        <h3>Get personalised support for your mental well-being with our<br/>AI-powered chatbot,rooted in evidence based therapies.</h3>
        <Link to="/login">
          <button>Get Started</button>
        </Link>
        <div>
        <img src={Group13} alt="chat" className='chat-image'/>
        </div>
      </div>
      
      <Footer />
       
    </div>
  );
};

export default LandingPage;





/*import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink from react-router-hash-link

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Mindscape</h1>
        {/* Hash link to scroll down to login section */
        /*<Link smooth to="#login">
          <button>Get Started</button>
        </Link>
      </div>
      <footer>
        <p>&copy; 2024 Mindscape. All rights reserved.</p>
      </footer>
      {/* Login section with id 'login' */
      /*<div id="login">
        <h2>Login</h2>
        {/* Your login form goes here */
      /*</div>
    </div>
  );
};

export default LandingPage;*/