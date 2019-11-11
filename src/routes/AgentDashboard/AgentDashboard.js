import React from 'react'
import './AgentDashboard.css'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardAgentProfile from '../../components/DashboardAgentProfile/DashboardAgentProfile'

export default function AgentDashboard(props){
    return(
        <main className='dashboardMain'>
            <DashboardHeader />
            <section className="dashboardAgent-section dashboardMain-section">
                <DashboardAgentProfile agentInfo={props.agentInfo[0]}/>
            </section>
            <section className="dashboardListing-section dashboardMain-section">
                
            </section>
        </main>
    )
}