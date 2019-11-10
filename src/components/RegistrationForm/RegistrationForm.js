import React from 'react'
import './RegistrationForm.css'

export default class RegistrationForm extends React.Component {
    render() {
        return(
            <form className="register-form">
                <div role='alert'></div>
                <div className="register-input">
                    <label htmlFor="email">Email address</label>
                    <div>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="emailConfirm"> Confirm email address</label>
                    <div>
                        <input type="text" name="emailConfirm" id="emailConfirm" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <div>
                        <input type="text" name="passwordConfirm" id="passwordConfirm" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <div>
                        <input type="text" name="phoneNumber" id="phoneNumber" />
                    </div>
                </div>
                <div className="register-button">
                    <button><a href="dashboard/agentDashboard.html">Next Step</a></button>
                </div>
            </form>
        )
    }
}