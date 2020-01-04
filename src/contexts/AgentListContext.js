import React, { Component } from 'react'

const AgentListContext = React.createContext({
    agentList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setAgentList: () => {},
})

export default AgentListContext

export class AgentListProvider extends Component {
    state = {
        agentList: [],
        error: null,
    }

    setAgentList = agentList =>{
        this.setState({agentList})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }
    
    clearError = () => {
        this.setState({error: null})
    }
    
    render() {
        const value = {
            agentList: this.state.agentList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setAgentList: this.setAgentList,
        }

        return (
            <AgentListContext.Provider value={value}>
                {this.props.children}
            </AgentListContext.Provider>
        )
    }
}