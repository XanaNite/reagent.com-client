import React from 'react';
import './EditProfile.css';
import EditProfileHeader from '../../components/EditProfileHeader/EditProfileHeader';
import EditAboutMeForm from '../../components/EditAboutMeForm/EditAboutMeForm';
import AgentContext from '../../contexts/AgentContext';
import AgentApiService from '../../services/agents-api-service';

export default class EditProfile extends React.Component{
    static contextType = AgentContext;

    componentDidMount(){
        const agentId = localStorage.getItem('user_id');

        this.context.clearError();
        
        AgentApiService.getAgent(agentId)
            .then(this.context.setAgent)
            .catch(this.context.setError);
    };

    render(){
        const {agent} = this.context;

        return(
            <main className='editProfile-main'>
                <EditProfileHeader agent={agent} />
                <section className="editProfile-update">
                    <EditAboutMeForm agent={agent} />
                </section>
            </main>
        );
    };
}