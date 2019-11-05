import React from 'react'
import './AgentDashboard.css'

export default function AgentDashboard(){
    return(
        <>
        <section class="dashboardAgent-section dashboardMain-section">
            <div class="container">
                <div class="dashboardAgent-agentInfo">
                    <div class="dashboardAgent-profile">
                        <img src="../images/placeholderProfile.png" alt="Agent profile image" />
                        <div class="dashboardAgent-name">
                            <h2>[[AGENT NAME]]</h2>
                            <p>Enter your slogan</p>
                        </div>
                    </div>
                    <div class="dashboardAgent-contact">
                        <table>
                            <tr>
                                <td class="tableStyle">Email</td>
                                <td>[[EMAIL]]</td>
                            </tr>
                            <tr>
                                <td class="tableStyle">Phone</td>
                                <td>[[TYPE]] [[#]]</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <a href="profileForm.html">Improve your profile</a>
            </div>
        </section>
        <section class="dashboardListing-section dashboardMain-section">
            <div class="container">
                <div class="dashboardListing-listingInfo">
                    <h2>Your new listings in the last 30 days</h2>
                    <div class="dashboardListing-new">
                        <div class="dashboardListing-none">
                            <h3>Looks like you haven't had any listings or rentals in the last 30 days</h3>
                            <p>If you MLS data is not appearing as expected contact Customer Care so we can help you connect your MLS.</p>
                        </div>
                        <div class="dashboardListing-info hidden"></div>
                    </div>
                </div>
                <a href="listingList.html">Manage your listings</a>
            </div>
        </section>
        </>
    )
}