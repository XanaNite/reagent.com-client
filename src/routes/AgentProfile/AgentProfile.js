import React from 'react'
import Rating from '../../components/Rating/Rating'
import ClientRatingList from '../../components/ClientRatingList/ClientRatingList'
import ClientRecommendList from '../../components/ClientRecommendList/ClientRecommendList'
import AgentListingsList from '../../components/AgentListingsList/AgentListingsList'
import './AgentProfile.css'

export default function AgentProfile(props){
    return(
        <>
        <section className="agentProfile-section">
            <div className="profileBanner">
                <img src={window.location.origin + "/images/placeholderProfile.png"} alt="Profile" />
                <div className="profileBanner-name">
                    <h2>{props.agent.agentName}, {props.agent.agentTitle} &#8226; {props.agent.agentLocation}</h2>
                    <div className="overallRating">
                        <Rating value={props.agent.ratings.agentOverall} />
                    </div>
                </div>
            </div>
        </section>
        <section className="agentInfo">
            <div className="agentInfo-about">
                <h3>About {props.agent.agentName} with {props.agent.agentOffice}</h3>
                <div className="about-container">
                    <p id="agentBio">{props.agent.agentBio}</p>
                    <div className="aboutDetails-container">
                        <p>Experience: {props.agent.agentExperience}</p>
                        <p>Specializations: {props.agent.agentSpecialization}</p>
                        <p>Areas Served: {props.agent.agentAreasServed}</p>
                        <p>Brokerage: {props.agent.agentbrokerage}</p>
                        <p>Slogan: {props.agent.agentSlogan}</p>
                        <p>Designations & Certifications</p>
                        <p>Price Range (last 24 months)</p>
                        <p>Recommendations count</p>
                    </div>
                </div>
            </div>
            <div className="agentInfo-listings">
                <h4>Listing Activity</h4>
                <AgentListingsList agentListings={props.agent.agentListings} />
            </div>
            <div className="agentInfo-ratings">
                <h4>Ratings and Reviews</h4>
                <div className="overallRating">
                    <Rating value={props.agent.ratings.agentOverall} />
                </div>
                <ClientRatingList clientRatings={props.agent.ratings.clientRatings}/>
            </div>
            <div className="agentInfo-recommendations">
                <h4>Recommendations</h4>
                <ClientRecommendList recommendation={props.agent.recommendation}/>
            </div>
        </section>
        </>
    )
}