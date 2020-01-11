/*jshint esversion: 6 */

import React from 'react';
import './UpdateProfilePage.css';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import ProfileImgSection from '../../components/ProfileImgSection/ProfileImgSection';
import ProfileAboutMeSection from '../../components/ProfileAboutMeSection/ProfileAboutMeSection';
import ProfileExpertiseSection from '../../components/ProfileExpertiseSection/ProfileExpertiseSection';
import AgentContext from '../../contexts/AgentContext';
import AgentApiService from '../../services/agents-api-service';

export default class UpdateProfilePage extends React.Component{
    static contextType = AgentContext;

    componentDidMount(){
        const agentId = localStorage.getItem('user_id');
        this.context.clearError()
        AgentApiService.getAgent(agentId)
            .then(this.context.setAgent)
            .catch(this.context.setError);
    }

    render(){
        const {agent} = this.context;

        return(
            <main className='updateProfilePage-main'>
                <DashboardHeader />
                <ProfileImgSection agent={agent} />
                <div className="agentProfile-container">
                    <ProfileAboutMeSection agent={agent} />
                    <div className='additionalInfo-container'>
                        <ProfileExpertiseSection />
                    </div>
                </div>
            </main>
        )
    }
}