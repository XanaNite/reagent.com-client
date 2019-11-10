import React from 'react'
import {Link} from 'react-router-dom'
import './ProfileAboutMeSection.css'
import {inputValue, multipleInputValues} from '../Utils/Utils'

export default function ProfileAboutMeSection(props){
    return (
        <section className="aboutMe-section profileMain-section">
            <div className="aboutMe-container">
                <h3>About Me</h3>
                <div className="aboutMe-name">
                    <h4>Name</h4>
                    <p>{props.agentInfo.agentName}</p>
                    <h4>Suffix</h4>
                    <p>Not entered</p>
                    <h4>Nickname</h4>
                    <p>Not entered</p>
                </div>
                <div className="aboutMe-contact">
                    <h4>Phone number</h4>
                    <p>{props.agentInfo.agentPhone[0].number}</p>
                    <p>{props.agentInfo.agentPhone[0].type}</p>
                    <h4>Contact email address</h4>
                    <p>{props.agentInfo.agentEmail}</p>
                </div>
                <div className="aboutMe-proDetails">
                    <h4>Professional title</h4>
                    <p>{inputValue(props.agentInfo.agentTitle)}</p>
                    <h4>Years of experience</h4>
                    <p>{inputValue(props.agentInfo.agentExperience)}</p>
                    <h4>Who do you work with?</h4>
                    <p>Not entered</p>
                    <h4>Specialties</h4>
                    <p>{multipleInputValues(props.agentInfo.agentSpecialization)}</p>
                    <h4>Areas served</h4>
                    <p>{multipleInputValues(props.agentInfo.agentAreasServed)}</p>
                    <h4>Zip codes served</h4>
                    <p>Not entered</p>
                    <h4>Website</h4>
                    <p>Not entered</p>
                    <h4>Video URL</h4>
                    <p>Not entered</p>
                    <h4>Slogan</h4>
                    <p>{inputValue(props.agentInfo.agentSlogan)}</p>
                    <h4>Bio</h4>
                    <p>{inputValue(props.agentInfo.agentBio)}</p>
                </div>
                <Link to='/editprofile'>Edit</Link>
            </div>
        </section>
    )
}