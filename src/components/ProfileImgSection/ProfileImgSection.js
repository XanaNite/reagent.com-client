import React from 'react'
import {Link} from 'react-router-dom'
import './ProfileImgSection.css'

export default function ProfileImgSection(props){
    return(
        <section className="agentProfile-section">
            <Link to='/'>View Profile</Link>
            <div className="updateProfileBanner">
                <img src="images/placeholderProfile.png" alt="Profile" />
                <div className="updateProfileBanner-name">
                    <h2>{props.agentInfo.agentName}</h2>
                </div>
            </div>
        </section>
    )
}