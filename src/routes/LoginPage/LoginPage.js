import React from 'react'
import './LoginPage.css'

export default function LoginPage(){
    return(
        <section class="signIn-section">
            <div class="signIn-greeting">
                <h2>Welcome back to REagent.com for professionals</h2>
                <p>Log in to your professional dashboard account to enhance your listings, manage ratings, reviews and recommendations, send reports to clients, and much more.</p>
            </div>
            <form class="signIn-form">
                <div class="login-input">
                    <label for="email">Email address</label>
                    <div>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <p>Forgot email?</p>
                <div class="login-input">
                    <label for="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <p>Forgot password?</p>
                <input type="checkbox" name="rememberMe" id="rememberMe" checked />
                <label for="rememberMe">Remember me</label>
                <div class="signIn-button">
                    <button><a href="dashboard/agentDashboard.html">Log in</a></button>
                </div>
            </form>
            <p class="signUp-link">Don't have an account? <a href="signUp.html">Sign Up</a></p>
        </section>
    )
}