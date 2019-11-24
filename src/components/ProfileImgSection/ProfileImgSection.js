import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './ProfileImgSection.css'

export default function ProfileImgSection(props){
    return(
        <section className="updateProfileBanner-section">
            <Link to='/agent/1'>View Profile</Link>
            <div className="updateProfileBanner">
                <div className='updateProfileBanner-img'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="updateProfileBanner-name">
                    <h2>{props.agentInfo.agentName}</h2>
                </div>
            </div>
        </section>
    )
}