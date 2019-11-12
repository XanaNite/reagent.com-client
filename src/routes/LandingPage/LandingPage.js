import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header';
import AgentList from '../../components/AgentList/AgentList';

function renderAgents(arr){
    return arr.map(agent =>
        <AgentList
            key={agent.id}
            agent={agent}
        />
    )
}

export default function LandingPage(props){
    return (
        <main className='LandingPage-main'>
            <Header />
            <section className='agentList-section'>
                <h2>Agents</h2>
                <div className='agentList-card flexbox-around'>
                    {renderAgents(props.agent)}
                </div>
            </section>
            <div className='listings-container'>
                <section className="listings-section flexbox-around">
                </section>
            </div>
        </main>
    );
}