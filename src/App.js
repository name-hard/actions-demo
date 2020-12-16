import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './views/index';
import Login from './views/login';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Index}></Route>
        </Switch>
      </Router>
    )
  }
}
