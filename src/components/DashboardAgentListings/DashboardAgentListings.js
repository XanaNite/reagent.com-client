import React from 'react'
import './DashboardAgentListings.css'

export default function DashboardAgentListings(){
    return(
        <div className="container">
            <div className="dashboardListing-listingInfo">
                <h2>Your new listings in the last 30 days</h2>
                <div className="dashboardListing-new">
                    <div className="dashboardListing-none">
                        <h3>Looks like you haven't had any listings or rentals in the last 30 days</h3>
                        <p>If you MLS data is not appearing as expected contact Customer Care so we can help you connect your MLS.</p>
                    </div>
                    <div className="dashboardListing-info hidden"></div>
                </div>
            </div>
            <a href="listingList.html">Manage your listings</a>
        </div>
    )
}