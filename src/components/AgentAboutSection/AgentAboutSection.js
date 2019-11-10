import React from 'react'
import './AgentAboutSection.css'
import {multipleInputValues} from '../Utils/Utils'

export default function AgentAboutSection(props){
    return (
        <div className="agentInfo-about">
            <h3>About {props.agent.agentName} with {props.agent.agentOffice}</h3>
            <div className="about-container">
                <p id="agentBio">{props.agent.agentBio}</p>
                <div className="aboutDetails-container">
                    <p>Experience: {props.agent.agentExperience} years</p>
                    <p>Specializations: {multipleInputValues(props.agent.agentSpecialization)}</p>
                    <p>Areas Served: {multipleInputValues(props.agent.agentAreasServed)}</p>
                    <p>Brokerage: {props.agent.agentbrokerage}</p>
                    <p>Slogan: {props.agent.agentSlogan}</p>
                    <p>Designations & Certifications</p>
                    <p>Price Range (last 24 months)</p>
                    <p>Recommendations count</p>
                </div>
            </div>
        </div>
    )
}