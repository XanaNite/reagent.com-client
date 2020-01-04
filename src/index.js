import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App/App'
import { AgentListProvider } from './contexts/AgentListContext'

ReactDOM.render(
    <BrowserRouter>
        <AgentListProvider>
            <App />
        </AgentListProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);
