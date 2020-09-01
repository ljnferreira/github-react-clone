import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Repository from './pages/Repository';

import NavBar from './components/NavBar'

function Routes() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/:user' component={Profile}/>
        <Route exact path='/repos/:user/:repo' component={Repository}/>
      </Switch>
    </Router>
  );
}

export default Routes;
