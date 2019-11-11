import React from 'react'
import Rating from '../../components/Rating/Rating'
import ClientRatingList from '../../components/ClientRatingList/ClientRatingList'
import ClientRecommendList from '../../components/ClientRecommendList/ClientRecommendList'
//import AgentListingsList from '../../components/AgentListingsList/AgentListingsList'
import Header from '../../components/Header/Header';
import './AgentProfile.css'
import AgentImgSection from '../../components/AgentImgSection/AgentImgSection';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
import DATA from '../../ratingsData'

export default function AgentProfile(props){
    const agent = DATA.agent.find(info =>
        info.id.toString() === props.match.params.agent_id
    )

    return(
        <main className='agentProfile-main'>
            <Header />
            <AgentImgSection agent={agent} />
            <section className="agentInfo">
                <AgentAboutSection agent={agent} />
                <div className="agentInfo-listings"></div>
                <div className="agentInfo-ratings">
                    <h4>Ratings and Reviews</h4>
                    <div className="overallRating">
                        <Rating value={agent.ratings.agentOverall} />
                    </div>
                    <ClientRatingList clientRatings={agent.ratings.clientRatings}/>
                </div>
                <div className="agentInfo-recommendations">
                    <h4>Recommendations</h4>
                    <ClientRecommendList recommendation={agent.recommendation}/>
                </div>
            </section>
        </main>
    )
}