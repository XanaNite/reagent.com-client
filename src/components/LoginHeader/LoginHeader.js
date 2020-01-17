import React from 'react';
import {Link} from 'react-router-dom';
import './LoginHeader.css';

export default function LoginHeader(){
    return(
        <header role="banner" className='loginHeader'>
            <nav role="navigation">
                <Link to='/register'>Sign Up</Link>
            </nav>
            <div className="signIn-title">
                <h1><Link to='/'>REagent.com</Link></h1>
                <span>for Professionals</span>
            </div>
        </header>
    );
}