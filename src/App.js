import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import ListPage from './ListPage.js';
import BeeInventor from './BeeInventor.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route
              path="/beeinventor"
              exact
              render={(routerProps) => <BeeInventor {...routerProps} />}
            />
            <Route
              path="/details/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}