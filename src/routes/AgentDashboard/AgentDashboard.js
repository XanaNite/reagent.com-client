import React from 'react'
import './AgentDashboard.css'

export default function AgentDashboard(){
    return(
        <>
        <section className="dashboardAgent-section dashboardMain-section">
            <div className="container">
                <div className="dashboardAgent-agentInfo">
                    <div className="dashboardAgent-profile">
                        <img src="../images/placeholderProfile.png" alt="Agent profile image" />
                        <div className="dashboardAgent-name">
                            <h2>[[AGENT NAME]]</h2>
                            <p>Enter your slogan</p>
                        </div>
                    </div>
                    <div className="dashboardAgent-contact">
                        <table>
                            <tr>
                                <td className="tableStyle">Email</td>
                                <td>[[EMAIL]]</td>
                            </tr>
                            <tr>
                                <td className="tableStyle">Phone</td>
                                <td>[[TYPE]] [[#]]</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <a href="profileForm.html">Improve your profile</a>
            </div>
        </section>
        <section className="dashboardListing-section dashboardMain-section">
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
        </section>
        </>
    )
}