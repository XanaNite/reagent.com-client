import React from 'react'
import './Header.css'

export default function Header(){
    return(
    <header role="banner">
        <nav role="navigation">
            Agent Dashboard: <span><a href="signIn.html">Log In</a></span> <span><a href="signUp.html">Sign Up</a></span>
        </nav>
        <h1><a href="landingPage.html">REagent.com</a></h1>
    </header>
    )
}