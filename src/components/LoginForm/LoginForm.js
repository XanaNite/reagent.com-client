import React from 'react';
import './LoginForm.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitJwtAuth = ev =>{
        ev.preventDefault()
    
        this.setState({error: null})
    
        const {agent_email, password} = ev.target
    
        AuthApiService.postLogin({
            agent_email: agent_email.value,
            password: password.value,
        })
        .then(res => {
          if(typeof res.authToken !== 'undefined') {
            localStorage.setItem('user_id', res.id)
            agent_email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
          }
          else {
            this.setState({error: res.error})
          }
        })
        .catch(res => {
            this.setState({error: res.error})
        })
    }

    render(){
        const { error } = this.state
        return(
            <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className="login-input">
                    <label htmlFor="agent_email">Email address</label>
                    <div>
                        <input type="text" name="agent_email" id="agent_email" />
                    </div>
                </div>
                <div className="login-input">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div className="login-button">
                    <button type='submit'>Log in</button>
                </div>
            </form>
        )
    }
}