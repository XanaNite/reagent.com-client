import React from 'react';
import './AgentAboutSection.css';
import {inputValue} from '../Utils/Utils';

export default function AgentAboutSection(props){
    return (
        <div className="agentInfo-about">
            <h3>
                About {props.agent.first_name} {props.agent.last_name} with {props.agent.office}
            </h3>
            <div className="about-container">
                <p id="agentBio">{inputValue(props.agent.bio)}</p>
                <div className="aboutDetails-container">
                    <p>Experience: {inputValue(props.agent.experience)} years</p>
                    <p>Brokerage: {inputValue(props.agent.brokerage)}</p>
                    <p>Slogan: {inputValue(props.agent.slogan)}</p>
                </div>
            </div>
            <div className="agentInfo-contact">
                <h4>Contact Me</h4>
                <p>Phone: {props.agent.agent_phone} {props.agent.agent_phone_type}</p>
                <p>Email: {props.agent.agent_email}</p>
            </div>
        </div>
    );
}