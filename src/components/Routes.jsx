import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route
        exact
        path="/dashboard"
        render={props => <UserList {...props} />}
      />
    </Switch>
  );
}

export default Routes;
