import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './DashboardHeader.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function DashboardHeader(){
    return(
        <header role="banner" className='dashboardHeader'>
            <nav role="navigation" className="flexbox-between">
                <div className="hamburgerMenu">
                    <HamburgerMenu />
                </div>
                <div className="dashboard-title">
                    <h1><Link to='/'>REagent.com</Link></h1>
                    <span>for Professionals</span>
                </div>
                <div className="dashboardImg-container">
                    <Link to='/myprofile'><FontAwesomeIcon icon={faUser} /></Link>
                </div>
            </nav>
        </header>
    );
}