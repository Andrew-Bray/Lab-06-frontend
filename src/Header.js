import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Its the Header!!!! Wowie
        </h1>
        <div className="navlinks">
          <Link to="/">That Bee List</Link>
          <Link to="/beeinventor">Bee Inventor</Link>
          <Link to="/details/:id"></Link>
        </div>
      </header>
    )
  }
}
