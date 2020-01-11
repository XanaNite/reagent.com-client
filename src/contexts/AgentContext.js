/*jshint esversion: 6 */

import React from 'react';

const AgentContext = React.createContext({
    agent: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setAgent: () => {},
    clearAgent: () => {},
});

export default AgentContext;

export class AgentProvider extends React.Component{
    state = {
        agent: [],
        error: null,
    };

    setError = error => {
        this.setState({ error })
    };
    
    clearError = () => {
        this.setState({ error: null })
    };

    setAgent = agent =>{
        this.setState({agent});
    };

    clearAgent = () =>{
        this.setAgent([]);
    };

    render(){
        const value = {
            agent: this.state.agent,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setAgent: this.setAgent,
            clearAgent: this.clearAgent,
        };

        return(
            <AgentContext.Provider value={value}>
                {this.props.children}
            </AgentContext.Provider>
        );
    }
}