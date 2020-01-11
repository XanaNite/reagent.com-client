import config from '../config';

const AuthApiService = {
  postLogin({ agent_email, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ agent_email, password }),
    })
      .then(res => res.json());
  },
  postAgent(agent){
    return fetch(`${config.API_ENDPOINT}/api/agents`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
            agent
        ),
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    );
  },
};

export default AuthApiService;