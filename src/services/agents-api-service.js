import config from '../config';

const AgentApiService = {
    getAgents(){
        return fetch(`${config.API_ENDPOINT}/api/agents`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        );
    },
    getAgent(agentId){
        return fetch(`${config.API_ENDPOINT}/api/agents/${agentId}`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        );
    },
    updateAgent(agentId, updatedFields){
        return fetch(`${config.API_ENDPOINT}/api/agents/${agentId}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(
                updatedFields
            ),
        })
        .then(res =>{ 
            if (!res.ok)
                return res.json().then(error => Promise.reject(error))
        });
    }
};

export default AgentApiService;