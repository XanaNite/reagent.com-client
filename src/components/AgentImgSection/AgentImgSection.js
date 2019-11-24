import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AgentImgSection.css'
import Rating from '../Rating/Rating'

export default function AgentImgSection(props){
    return (
        <section className="agentProfile-section">
            <div className="profileBanner">
                <div className='profileBanner-img'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="profileBanner-name">
                    <h2>{props.agent.agentName}, {props.agent.agentTitle} &#8226; {props.agent.agentLocation}</h2>
                    <div className="overallRating">
                        <Rating value={props.agent.ratings.agentOverall} />
                    </div>
                </div>
            </div>
        </section>
    )
}