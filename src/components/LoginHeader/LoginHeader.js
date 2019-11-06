import React from 'react'
import './LoginHeader.css'

export default function LoginHeader(){
    return(
        <header role="banner">
            <nav role="navigation">
                <a href="signUp.html">Sign Up</a>
            </nav>
            <div className="signIn-title">
                <h1><a href="index.html">REagent.com</a></h1>
                <span>for Professionals</span>
            </div>
        </header>
    )
}