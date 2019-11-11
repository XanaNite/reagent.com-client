import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import AgentProfile from '../../routes/AgentProfile/AgentProfile'
import DATA from '../../ratingsData'
import AgentDashboard from '../../routes/AgentDashboard/AgentDashboard';
import EditProfile from '../../routes/EditProfile/EditProfile';
import UpdateProfilePage from '../../routes/UpdateProfilePage/UpdateProfilePage'

class App extends React.Component{
  render(){
    const agent = DATA.agent

    return (
      <div className='App'>
        <Switch>
          <Route exact path={'/'} render={() => <LandingPage agent={agent} />} />
          <Route path={'/agent/:agent_id'} component={AgentProfile} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/register'} component={RegistrationPage} />
          <Route path={'/dashboard'} render={() => <AgentDashboard agentInfo={agent} />} />
          <Route path={'/myprofile'} render={() => <UpdateProfilePage agentInfo={agent} />} />
          <Route path={'/editprofile'} component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
