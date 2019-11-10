import React from 'react'
import Rating from '../../components/Rating/Rating'
import ClientRatingList from '../../components/ClientRatingList/ClientRatingList'
import ClientRecommendList from '../../components/ClientRecommendList/ClientRecommendList'
//import AgentListingsList from '../../components/AgentListingsList/AgentListingsList'
import Header from '../../components/Header/Header';
import './AgentProfile.css'
import AgentImgSection from '../../components/AgentImgSection/AgentImgSection';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';

export default function AgentProfile(props){
    return(
        <>
        <Header />
        <AgentImgSection agent={props.agent} />
        <section className="agentInfo">
            <AgentAboutSection agent={props.agent} />
            <div className="agentInfo-listings"></div>
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