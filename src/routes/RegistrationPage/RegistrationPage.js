import React from 'react'
import './RegistrationPage.css'
import RegistrationHeader from '../../components/RegistrationHeader/RegistrationHeader'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default function RegistrationPage(){
    return(
        <>
        <RegistrationHeader />
        <div className="signIn-main">
            <section className="signIn-section">
                <div className="signIn-greeting">
                    <h2>Create a professional account</h2>
                    <p>Sign up to use your professional dashboard—it's fast and free. Showcase your brand, enhance your listings and much more.</p>
                </div>
                <RegistrationForm />
                <p className="signUp-link">Already have a professional account? <a href="signIn.html">Log in here</a></p>
            </section>
        </div>
        </>
    )
}