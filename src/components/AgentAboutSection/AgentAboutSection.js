import React from 'react'
import './AgentAboutSection.css'
import {inputValue} from '../Utils/Utils'

export default function AgentAboutSection(props){
    return (
        <div className="agentInfo-about">
            <h3>
                About {props.first_name} {props.last_name} with {props.office}
            </h3>
            <div className="about-container">
                <p id="agentBio">{inputValue(props.bio)}</p>
                <div className="aboutDetails-container">
                    <p>Experience: {inputValue(props.experience)} years</p>
                    <p>Brokerage: {inputValue(props.brokerage)}</p>
                    <p>Slogan: {inputValue(props.slogan)}</p>
                </div>
            </div>
            <div className="agentInfo-contact">
                <h4>Contact Me</h4>
                <p>Phone: {props.agent_phone} {props.agent_phone_type}</p>
                <p>Email: {props.agent_email}</p>
            </div>
        </div>
    )
}