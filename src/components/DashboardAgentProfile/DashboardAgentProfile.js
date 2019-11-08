import React from 'react'
import './DashboardAgentProfile.css'

export default function DashboardAgentProfile(props){
    return(
        <div className="container">
            <div className="dashboardAgent-agentInfo">
                <div className="dashboardAgent-profile">
                    <img src="../images/placeholderProfile.png" alt="Agent profile" />
                    <div className="dashboardAgent-name">
                        <h2>{props.agentInfo.agentName}</h2>
                        <p>"{props.agentInfo.agentSlogan}"</p>
                    </div>
                </div>
                <div className="dashboardAgent-contact">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableStyle">Email</td>
                                <td>{props.agentInfo.agentEmail}</td>
                            </tr>
                            <tr>
                                <td className="tableStyle">Phone</td>
                                <td>{props.agentInfo.agentPhone[0].type} {props.agentInfo.agentPhone[0].number}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href="profileForm.html">Improve your profile</a>
        </div>
    )
}