// src/pages/Dashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from '../layout/SideBar';
import Home from './Home';
import MyRocky from './MyRocky';
import Account from './Account';
import HabitTracker from './HabitTracker';
import RestModule from './SupportModules/RestModule';
import MeditationModule from './SupportModules/MeditationModule';
import SystemModule from './SupportModules/SystemModule';
import NotFound from './NotFound';

const Dashboard = () => {
    return (
        <Router>
            <div className="dashboard">
                <SideBar />
                <div className="main-content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/my-rocky" element={<MyRocky />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/habit-tracker" element={<HabitTracker />} />
                        <Route path="/modules/rest" element={<RestModule />} />
                        <Route path="/modules/meditation" element={<MeditationModule />} />
                        <Route path="/modules/system" element={<SystemModule />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;


export default Dashboard;
