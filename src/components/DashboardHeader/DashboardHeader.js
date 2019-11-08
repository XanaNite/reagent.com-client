import React from 'react'
import './DashboardHeader.css'

export default function DashboardHeader(){
    return(
        <header role="banner">
            <nav role="navigation" className="flexbox-between">
                <div className="hamburgerMenu">
                    <a href="agentDashboard.html"><i className="fa fa-bars"></i></a>
                </div>
                <div className="dashboard-title">
                    <h1><a href="../index.html">REagent.com</a></h1>
                    <span>for Professionals</span>
                </div>
                <div className="profileImg-container">
                    <a href="accountSettings.html"><img src="../images/placeholderProfile.png" alt="Agent profile" /></a>
                </div>
            </nav>
        </header>
    )
}