import TokenService from './token-service'
import config from '../config'

const AgentApiService = {
    getAgents(){
        return fetch(`${config.API_ENDPOINT}/agents`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getAgent(agentId){
        return fetch(`${config.API_ENDPOINT}/agents/${agentId}`, {
            headers: {
              'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postAgent(agentInfo){
        return fetch(`${config.API_ENDPOINT}/agents`, {
            method: 'POST',
            headers: {
              'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                agentInfo
            }),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default AgentApiService