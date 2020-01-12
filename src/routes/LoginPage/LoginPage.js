import React from 'react';
import {Link} from 'react-router-dom';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends React.Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
    
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
    }

    render(){
        return(
            <main className='loginPage-main'>
                <LoginHeader />
                <div className="signIn-container">
                    <section className="signIn-section">
                        <div className="signIn-greeting">
                            <h2>Welcome back to REagent.com for professionals</h2>
                            <p>Log in to your professional dashboard account to enhance your listings, manage ratings, reviews and recommendations, send reports to clients, and much more.</p>
                        </div>
                        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                        <p>
                            Demo User: <br />
                            email: user1@test.com <br />
                            password: Password1!
                        </p>
                        <p className="signIn-link">Don't have an account? <Link to='/register'>Sign Up</Link></p>
                    </section>
                </div>
            </main>
        )
    }
}