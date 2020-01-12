import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AgentImgSection.css'

export default function AgentImgSection(props){
    return (
        <section className="agentProfile-section">
            <div className="profileBanner">
                <div className='profileBanner-img'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="profileBanner-name">
                    <h2>
                        {props.agent.first_name} {props.agent.last_name}, {props.agent.title} &#8226; {props.agent.city}, {props.agent.state}
                    </h2>
                </div>
            </div>
        </section>
    )
}