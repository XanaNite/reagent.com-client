import React from 'react'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default function LoginPage(){
    return(
        <main className='loginPage-main'>
            <LoginHeader />
            <div className="signIn-container">
                <section className="signIn-section">
                    <div className="signIn-greeting">
                        <h2>Welcome back to REagent.com for professionals</h2>
                        <p>Log in to your professional dashboard account to enhance your listings, manage ratings, reviews and recommendations, send reports to clients, and much more.</p>
                    </div>
                    <LoginForm />
                    <p className="signIn-link">Don't have an account? <a href="signUp.html">Sign Up</a></p>
                </section>
            </div>
        </main>
    )
}