import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import  Footer from './components/Footer';
import './App.css';
import PopupForm from './components/PopupForm';
import HomePage from './components/HomePage';
import LiveChat from './components/LiveChat';
//import 'typeface-poppins';
function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/popup" element={<PopupForm />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/live" element={<LiveChat />}/>
      </Routes>
    </Router>
  );
}

export default App;