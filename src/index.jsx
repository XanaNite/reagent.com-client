import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { AgentListProvider } from './contexts/AgentListContext';
import { AgentProvider } from './contexts/AgentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AgentListProvider>
                <AgentProvider>
                    <App />
                </AgentProvider>
            </AgentListProvider>
        </BrowserRouter>
    </React.StrictMode>
);
