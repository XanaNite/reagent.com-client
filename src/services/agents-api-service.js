import TokenService from './token-service'
import config from '../config'

const AgentApiService = {
    getAgents(){
        return fetch(`${config.API_ENDPOINT}/api/agents`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getAgent(agentId){
        return fetch(`${config.API_ENDPOINT}/api/agents/${agentId}`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default AgentApiService