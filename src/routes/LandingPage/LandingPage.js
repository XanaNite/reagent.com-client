import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import AgentList from '../../components/AgentList/AgentList'
import AgentListContext from '../../contexts/AgentListContext'
import AgentApiService from '../../services/agents-api-service'

export default class LandingPage extends React.Component{
    static contextType = AgentListContext
    
    componentDidMount(){
        this.context.clearError()
        AgentApiService.getAgents()
            .then(this.context.setAgentList)
            .catch(this.context.setError)
    }

    renderAgents(){
        const {agentList = []} = this.context

        return agentList.map(agent =>
            <AgentList
                key={agent.id}
                agent={agent}
            />
        )
    }

    render(){
        const {error} = this.context

        return (
            <main className='LandingPage-main'>
                <Header />
                <section className='agentList-section'>
                    <h2>Agents</h2>
                    <div className='agentList-card flexbox-around'>
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderAgents()}
                    </div>
                </section>
                <div className='listings-container'>
                    <section className="listings-section flexbox-around">
                    </section>
                </div>
            </main>
        );
    }
}