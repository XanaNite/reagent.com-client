import React from 'react'

export default class LoginForm extends React.Component {
    render(){
        return(
            <form className="signIn-form">
                <div role='alert'>
                    
                </div>
                <div className="login-input">
                    <label htmlFor="email">Email address</label>
                    <div>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <p>Forgot email?</p>
                <div className="login-input">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <p>Forgot password?</p>
                <input type="checkbox" name="rememberMe" id="rememberMe" checked />
                <label htmlFor="rememberMe">Remember me</label>
                <div className="signIn-button">
                    <button><a href="dashboard/agentDashboard.html">Log in</a></button>
                </div>
            </form>
        )
    }
}