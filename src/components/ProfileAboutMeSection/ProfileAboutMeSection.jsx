import React from 'react';
import {Link} from 'react-router-dom';
import './ProfileAboutMeSection.css';
import {inputValue} from '../Utils/Utils';

export default function ProfileAboutMeSection(props){
    return (
        <section className="aboutMe-section profileMain-section">
            <div className="aboutMe-container">
                <h3>About Me</h3>
                <div className="aboutMe-name">
                    <h4>Name</h4>
                    <p>{props.agent.first_name} {props.agent.last_name}</p>
                </div>
                <div className="aboutMe-contact">
                    <h4>Phone number</h4>
                    <p>{props.agent.agent_phone} {props.agent.agent_phone_type}</p>
                    <h4>Contact email address</h4>
                    <p>{props.agent.agent_email}</p>
                </div>
                <div className="aboutMe-proDetails aboutMe-flex">
                    <div className="proDetails-title proDetails-container">
                        <h4>Professional title</h4>
                        <p>{inputValue(props.agent.title)}</p>
                    </div>
                    <div className="proDetails-experience proDetails-container">
                        <h4>Years of experience</h4>
                        <p>{inputValue(props.agent.experience)}</p>
                    </div>
                    <div className="proDetails-brokerage proDetails-container">
                        <h4>Brokerage</h4>
                        <p>{inputValue(props.agent.brokerage)}</p>
                    </div>
                    <div className="proDetails-office proDetails-container">
                        <h4>Office</h4>
                        <p>{inputValue(props.agent.office)}</p>
                    </div>
                    <div className="proDetails-slogan proDetails-container">
                        <h4>Slogan</h4>
                        <p>{inputValue(props.agent.slogan)}</p>
                    </div>
                    <div className="proDetails-location proDetails-container">
                        <h4>Location</h4>
                        <div className="location-group">
                            <h5>City</h5>
                            <p>{inputValue(props.agent.city)}</p>
                            <h5>State</h5>
                            <p>{inputValue(props.agent.state)}</p>
                            <h5>Zip</h5>
                            <p>{inputValue(props.agent.zip)}</p>
                        </div>
                    </div>
                    <div className="proDetails-bio">
                        <h4>Bio</h4>
                        <p>{inputValue(props.agent.bio)}</p>
                    </div>
                </div>
                <div className="editProfile-link">
                    <Link to='/editprofile'>Edit</Link>
                </div>
            </div>
        </section>
    );
}