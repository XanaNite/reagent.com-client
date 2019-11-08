import React from 'react'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../Header/Header';
import ListingPage from '../../routes/ListingPage/ListingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import AgentProfile from '../../routes/AgentProfile/AgentProfile'
import DATA from '../../ratingsData'
import AgentDashboard from '../../routes/AgentDashboard/AgentDashboard';

class App extends React.Component{
  render(){
    const agent = DATA.agent

    return (
      <div className='App'>
        <AgentDashboard agentInfo={agent}/>
      </div>
    );
  }
}

export default App;
