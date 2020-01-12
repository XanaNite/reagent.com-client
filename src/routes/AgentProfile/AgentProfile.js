import React from 'react'
import Header from '../../components/Header/Header';
import './AgentProfile.css'
import AgentImgSection from '../../components/AgentImgSection/AgentImgSection';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
import AgentContext from '../../contexts/AgentContext'
import AgentApiService from '../../services/agents-api-service'

export default class  AgentProfile extends React.Component{
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = AgentContext

    componentDidMount(){
        const agentId = this.props.match.params.agent_id

        this.context.clearError()
        AgentApiService.getAgent(agentId)
            .then(this.context.setAgent)
            .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearAgent()
    }

    renderAgent(){
        const {agent} = this.context

        return(
            <>
                <AgentImgSection agent={agent} />
                <section className="agentInfo">
                    <AgentAboutSection agent={agent} />
                </section>
            </>
        )
    }

    render(){
        const {error} = this.context

        return(
            <main className='agentProfile-main'>
                <Header />
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderAgent()}
            </main>
        )
    }
}