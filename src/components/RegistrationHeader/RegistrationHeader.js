import React from 'react'
import './RegistrationHeader.css'

export default function RegistrationHeader(){
    return(
        <header role="banner">
            <nav role="navigation">
                <a href="signIn.html">Log In</a>
            </nav>
            <div className="signIn-title">
                <h1><a href="index.html">REagent.com</a></h1>
                <span>for Professionals</span>
            </div>
        </header>
    )
}