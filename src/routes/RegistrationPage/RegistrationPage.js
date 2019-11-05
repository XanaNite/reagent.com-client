import React from 'react'
import './RegistrationPage.css'

export default function RegistrationPage(){
    return(
        <section class="signIn-section">
            <div class="signIn-greeting">
                <h2>Create a professional account</h2>
                <p>Sign up to use your professional dashboard—it's fast and free. Showcase your brand, enhance your listings and much more.</p>
            </div>
            <form class="signIn-form">
                <div class="login-input">
                    <label for="email">Email address</label>
                    <div>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <div class="login-input">
                    <label for="emailConfirm"> Confirm email address</label>
                    <div>
                        <input type="text" name="emailConfirm" id="emailConfirm" />
                    </div>
                </div>
                <div class="login-input">
                    <label for="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <div class="login-input">
                    <label for="passwordConfirm">Confirm password</label>
                    <div>
                        <input type="text" name="passwordConfirm" id="passwordConfirm" />
                    </div>
                </div>
                <div class="login-input">
                    <label for="phoneNumber">Phone number</label>
                    <div>
                        <input type="text" name="phoneNumber" id="phoneNumber" />
                    </div>
                </div>
                <div class="signUp-button">
                    <button><a href="dashboard/agentDashboard.html">Next Step</a></button>
                </div>
            </form>
            <p class="signUp-link">Already have a professional account? <a href="signIn.html">Log in here</a></p>
        </section>
    )
}