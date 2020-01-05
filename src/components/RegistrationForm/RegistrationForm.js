import React from 'react'
import './RegistrationForm.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    
    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const {first_name, last_name, user_name, password, agent_email, agent_phone} = ev.target
        this.setState({ error: null })
        console.log(first_name)

        AuthApiService.postAgent({
            first_name: first_name.value,
            last_name: last_name.value,
            user_name: user_name.value,
            password: password.value,
            agent_email: agent_email.value,
            agent_phone: agent_phone.value
        })
        .then(agent => {
            first_name.value = ''
            last_name.value = ''
            user_name.value = ''
            password.value = ''
            agent_email.value = ''
            agent_phone.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch(res => {this.setState({error: res.error})})
    }

    render() {
        const { error } = this.state

        return(
            <form className="register-form" onSubmit={this.handleSubmit}>
                <div role='alert'>{error && <p className='red'>{error}</p>}</div>
                <div className="register-input">
                    <label htmlFor="agent_email">Email address</label>
                    <div>
                        <input type="text" name="agent_email" id="agent_email" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="user_name">Username</label>
                    <div>
                        <input type="text" name="user_name" id="user_name" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="first_name">First Name</label>
                    <div>
                        <input type="text" name="first_name" id="first_name" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="last_name">Last Name</label>
                    <div>
                        <input type="text" name="last_name" id="last_name" />
                    </div>
                </div>
                <div className="register-input">
                    <label htmlFor="agent_phone">Phone number</label>
                    <div>
                        <input type="text" name="agent_phone" id="agent_phone" />
                    </div>
                </div>
                <div className="register-button">
                    <button><a href="dashboard/agentDashboard.html">Next Step</a></button>
                </div>
            </form>
        )
    }
}