import React from 'react'
import AgentListing from '../AgentListing/AgentListing'
import './AgentListingsList.css'

export default class AgentListingsList extends React.Component{
    render(){
        const agentListings = this
            .props
            .agentListings
            .map((agentListing, i) =>
            <AgentListing {...agentListing} key={i} />)

        return(
            <>
            <h4>Listing Activity</h4>
            <div className="listing-group-container flexbox-around">
                {agentListings}
            </div>
            </>
        )
    }
}

AgentListingsList.defaultProps = {
    agentListings: [],
}