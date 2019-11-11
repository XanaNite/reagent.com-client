import React from 'react'
import {Link} from 'react-router-dom'
import './AgentList.css'

export default function AgentList(props){
    return(
        <div className='AgentList-container'>
            <div className='AgentListImg-container flexbox-around'>
                <Link to={`/agent/${props.agent.id}`}><img src={"/images/placeholderProfile.png"} alt="Profile" /></Link>
                <div className='AgentListInfo-container'>
                <Link to={`/agent/${props.agent.id}`}><h3>{props.agent.agentName}</h3></Link>
                    <p>{props.agent.agentOffice}</p>
                </div>
            </div>
            <p className='AgentListSlogan'>"{props.agent.agentSlogan}"</p>
        </div>
    )
}