import React from 'react'
import './LandingPage.css'
import SearchSection from '../../components/SearchSection/SearchSection';
//import MainListingList from '../../components/MainListingList/MainListingList';
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
        <div className='LandingPage-container'>
            <Header />
            <section className='agentList-section'>
                <h2>Agents</h2>
                <div className='agentList-card flexbox-around'>
                    {renderAgents(props.agent)}
                </div>
            </section>
            <div className='listings-container'>
                <h2>Listings</h2>
                <SearchSection />
                <section className="listings-section flexbox-around">
                </section>
            </div>
        </div>
    );
}