import React from 'react'
import './AgentListing.css'

export default function AgentListing(props){
    return(
        <div className="listing-group">
            <div className="listing-container">
                <a href="listingPage.html"><img src="images/placeholderHome.jpg" alt={props.alt} /></a>
                <div className="listing-details">
                    <p>{props.location}</p>
                    <p>{props.cost}</p>
                    <p>{props.beds}/{props.bath}</p>
                </div>
            </div>
        </div>
    )
}