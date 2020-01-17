import React from 'react';
import './AgentDashboard.css';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardAgentProfile from '../../components/DashboardAgentProfile/DashboardAgentProfile';
import AgentContext from '../../contexts/AgentContext';
import AgentApiService from '../../services/agents-api-service';

export default class AgentDashboard extends React.Component{
    static contextType = AgentContext;

    componentDidMount(){
        const agentId = localStorage.getItem('user_id');

        this.context.clearError();
        AgentApiService.getAgent(agentId)
            .then(this.context.setAgent)
            .catch(this.context.setError)
    };

    render(){
        const {agent} = this.context;

        return(
            <main className='dashboardMain'>
                <DashboardHeader />
                <section className="dashboardAgent-section dashboardMain-section">
                    <DashboardAgentProfile agent={agent}/>
                </section>
                <section className="dashboardListing-section dashboardMain-section">
                    
                </section>
            </main>
        );
    };
}