import React from 'react'
import './AgentAboutSection.css'
//import {multipleInputValues} from '../Utils/Utils'

export default function AgentAboutSection(props){
    return (
        <div className="agentInfo-about">
            <h3>About {props.agent.first_name} {props.agent.last_name} with {props.agent.office}</h3>
            <div className="about-container">
                <p id="agentBio">{props.agent.bio}</p>
                <div className="aboutDetails-container">
                    <p>Experience: {props.agent.experience} years</p>
                    {/*<p>Specializations: {multipleInputValues(props.agent.agentSpecialization)}</p>
                    <p>Areas Served: {multipleInputValues(props.agent.agentAreasServed)}</p>*/}
                    <p>Brokerage: {props.agent.brokerage}</p>
                    <p>Slogan: {props.agent.slogan}</p>
                    {/*<p>Designations & Certifications</p>
                    <p>Price Range (last 24 months)</p>
                    <p>Recommendations count</p>*/}
                </div>
            </div>
        </div>
    )
}