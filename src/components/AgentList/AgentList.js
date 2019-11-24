import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AgentList.css'

export default function AgentList(props){
    return(
        <div className='AgentList-container'>
            <div className='AgentListImg-container flexbox-around'>
                <div className='AgentList-container-img'>
                    <Link to={`/agent/${props.agent.id}`}><FontAwesomeIcon icon={faUser} /></Link>
                </div>
                <div className='AgentListInfo-container'>
                <Link to={`/agent/${props.agent.id}`}><h3>{props.agent.agentName}</h3></Link>
                    <p>{props.agent.agentOffice}</p>
                </div>
            </div>
            <p className='AgentListSlogan'>"{props.agent.agentSlogan}"</p>
        </div>
    )
}