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
                        {props.first_name} {props.last_name}, {props.title} &#8226; {props.city}, {props.state}
                    </h2>
                </div>
            </div>
        </section>
    )
}