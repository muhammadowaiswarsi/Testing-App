import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router';
import history from './History';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

class App extends Component {
  render() {
    return (
      <div>
      <Router history={history}>
          <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
          </Switch>
      </Router>
  </div >
    );
  }
}

export default App;
