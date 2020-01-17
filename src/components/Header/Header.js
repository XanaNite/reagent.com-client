import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
    <header role="banner" className='headerSection'>
        <nav role="navigation">
            <p>Please use the following link to access your agent dashboard:</p> <span><Link to="/dashboard">My Dashboard</Link></span> <span><Link to="/register">Sign Up</Link></span>
        </nav>
        <h1><Link to="/">REagent.com</Link></h1>
    </header>
    );
}