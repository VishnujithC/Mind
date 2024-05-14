import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './HomePage.css'; // Import CSS file for styling

const HomePage = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="home-page">
            <header>
                <h1>Welcome to Your App</h1>
                <button onClick={toggleSidebar}>☰</button> {/* Button to toggle the sidebar */}
            </header>
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/live-chat">Live Chat</Link></li>
                    </ul>
                </nav>
            </div>
            <main>
                {/* Your main content goes here */}
            </main>
        </div>
    );
};

export default HomePage;
