import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import AgentProfile from '../../routes/AgentProfile/AgentProfile';
import AgentDashboard from '../../routes/AgentDashboard/AgentDashboard';
import EditProfile from '../../routes/EditProfile/EditProfile';
import UpdateProfilePage from '../../routes/UpdateProfilePage/UpdateProfilePage';
import PrivateRoute from '../Utils/PrivateRoute';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/agent/:agent_id'} element={<AgentProfile />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegistrationPage />} />
        <Route path={'/dashboard'} element={<PrivateRoute><AgentDashboard /></PrivateRoute>} />
        <Route path={'/myprofile'} element={<PrivateRoute><UpdateProfilePage /></PrivateRoute>} />
        <Route path={'/editprofile'} element={<PrivateRoute><EditProfile /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
