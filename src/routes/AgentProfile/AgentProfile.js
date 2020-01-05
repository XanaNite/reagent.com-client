import React from 'react'
//import Rating from '../../components/Rating/Rating'
//import ClientRatingList from '../../components/ClientRatingList/ClientRatingList'
//import ClientRecommendList from '../../components/ClientRecommendList/ClientRecommendList'
//import AgentListingsList from '../../components/AgentListingsList/AgentListingsList'
import Header from '../../components/Header/Header';
import './AgentProfile.css'
import AgentImgSection from '../../components/AgentImgSection/AgentImgSection';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
import AgentContext from '../../contexts/AgentContext'
import AgentApiService from '../../services/agents-api-service'

export default class  AgentProfile extends React.Component{
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = AgentContext

    componentDidMount(){
        const agentId = this.props.match.params.agent_id
        console.log(agentId)
        this.context.clearError()
        AgentApiService.getAgent(agentId)
            .then(this.context.setAgent)
            .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearAgent()
    }

    renderAgent(){
        const {agent} = this.context

        return(
            <>
                <AgentImgSection agent={agent} />
                <section className="agentInfo">
                    <AgentAboutSection agent={agent} />
                    {/*<div className="agentInfo-listings"></div>
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
                    </div>*/}
                </section>
            </>
        )
    }

    render(){
        const {error} = this.context

        return(
            <main className='agentProfile-main'>
                <Header />
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderAgent()}
            </main>
        )
    }
}