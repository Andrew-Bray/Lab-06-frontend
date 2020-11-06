import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import DetailPage from './DetailPage.js';
import BeeInventor from './BeeInventor.js';

export default class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Header />
          <Switch>
            <Route
              path="/beeinventor"
              exact
              render={(routerProps) => <BeeInventor {...routerProps} />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}