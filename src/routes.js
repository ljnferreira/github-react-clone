import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Repository from './pages/Repository';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/:user' component={Profile}/>
        <Route exact path='/repos/:user/:repo' component={Repository}/>
      </Switch>
    </Router>
  );
}

export default Routes;
