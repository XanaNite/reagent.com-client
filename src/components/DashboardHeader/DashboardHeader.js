import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './DashboardHeader.css'

export default function DashboardHeader(){
    return(
        <header role="banner" className='dashboardHeader'>
            <nav role="navigation" className="flexbox-between">
                <div className="hamburgerMenu">
                    <Link to='/dashboard'><FontAwesomeIcon icon={faBars} /></Link>
                </div>
                <div className="dashboard-title">
                    <h1><Link to='/'>REagent.com</Link></h1>
                    <span>for Professionals</span>
                </div>
                <div className="dashboardImg-container">
                    <Link to='/myprofile'><img src="../images/placeholderProfile.png" alt="Agent profile" /></Link>
                </div>
            </nav>
        </header>
    )
}