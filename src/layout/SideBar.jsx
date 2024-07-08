// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/my-rocky">My Rocky</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/habit-tracker">Habit Tracker</Link></li>
                <li><Link to="/modules/rest">Rest Module</Link></li>
                <li><Link to="/modules/meditation">Meditation Module</Link></li>
                <li><Link to="/modules/system">System Module</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
