import React from 'react';
import {Link} from 'react-router-dom';
import './RegistrationHeader.css';

export default function RegistrationHeader(){
    return(
        <header role="banner" className='regHeader'>
            <nav role="navigation">
                <Link to='/login'>Log In</Link>
            </nav>
            <div className="signIn-title">
                <h1><Link to='/'>REagent.com</Link></h1>
                <span>for Professionals</span>
            </div>
        </header>
    );
}