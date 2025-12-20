import React from 'react';
import {Link} from 'react-router-dom';
import './RegistrationPage.css';
import RegistrationHeader from '../../components/RegistrationHeader/RegistrationHeader';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends React.Component{
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    };

    handleRegistrationSuccess = agent => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/dashboard';
        history.push(destination);
    };

    render(){
        return(
            <main className='register-main'>
                <RegistrationHeader />
                <div className="register-container">
                    <section className="register-section">
                        <div className="register-greeting">
                            <h2>Create a professional account</h2>
                            <p>Sign up to use your professional dashboard—it's fast and free. Showcase your brand, enhance your listings and much more.</p>
                        </div>
                        <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess} />
                        <p className="register-link">Already have a professional account? <Link to='/login'>Log In</Link></p>
                    </section>
                </div>
            </main>
        );
    };
}