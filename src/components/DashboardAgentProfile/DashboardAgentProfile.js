import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './DashboardAgentProfile.css'

export default function DashboardAgentProfile(props){
    return(
        <div className="dashboardMain-container">
            <div className="dashboardAgent-agentInfo">
                <div className="dashboardAgent-profile">
                    <div className='dashboardAgent-profile-img'>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="dashboardAgent-name">
                        <h2>{props.agent.first_name} {props.agent.last_name}</h2>
                        <p>"{props.agent.slogan}"</p>
                    </div>
                </div>
                <div className="dashboardAgent-contact">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableStyle">Email</td>
                                <td>{props.agent.agent_email}</td>
                            </tr>
                            <tr>
                                <td className="tableStyle">Phone</td>
                                <td>{props.agent.agent_phone_type} {props.agent.agent_phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to='/myprofile'>Improve your profile</Link>
        </div>
    )
}