import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import AgentProfile from '../../routes/AgentProfile/AgentProfile';
import AgentDashboard from '../../routes/AgentDashboard/AgentDashboard';
import EditProfile from '../../routes/EditProfile/EditProfile';
import UpdateProfilePage from '../../routes/UpdateProfilePage/UpdateProfilePage';
import PrivateRoute from '../Utils/PrivateRoute';

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/agent/:agent_id'} component={AgentProfile} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/register'} component={RegistrationPage} />
          <PrivateRoute path={'/dashboard'} component={AgentDashboard} />
          <PrivateRoute path={'/myprofile'} component={UpdateProfilePage} />
          <PrivateRoute path={'/editprofile'} component={EditProfile} />
        </Switch>
      </div>
    );
  };
}

export default App;
