import React from 'react'
import './ProfileImgSection.css'

export default function ProfileImgSection(props){
    return(
        <section className="agentProfile-section">
            <a href="../agentProfile.html">View Profile</a>
            <div className="profileBanner">
                <img src="images/placeholderProfile.png" alt="Profile" />
                <div className="profileBanner-name">
                    <h2>{props.agentInfo.agentName}</h2>
                </div>
            </div>
        </section>
    )
}