import React, { Component } from 'react';
import request from 'superagent';
import fetch from 'superagent';

const genericUser = {
  userId: 1
};

export default class BeeInventor extends Component {

  state = {
    names: []
  }
  fetchBees = async () => {
    const response = await fetch.get(`https://afternoon-sands-77287.herokuapp.com/friends`);
    this.setState({ names: response.body });
    console.log(response.body);
  }

  componentDidMount = async () => {
    this.fetchBees();
  }

  //submit actions
  handleSubmit = async (e) => {
    e.preventDefault();

    //making a new bee from the form data ANd the generic user
    const newBee = {
      name_id: this.state.nameId,
      friendliness: this.state.friendliness,
      domesticated: this.state.domesticated,
      winterization: this.state.winterization,
      characteristics: this.state.characteristics,
      owner_id: genericUser.userId,
    };

    //send data to our endpoint useing post and send
    await request
      .post(`https://afternoon-sands-77287.herokuapp.com/bees`)
      .send(newBee);

    //take folks back to the bee page
    this.props.history.push('/');
  }
  //handling the name change
  handleNameChange = (e) => {
    this.setState({ nameId: e.target.value })
  }

  render() {
    return (
      <div className="inventpage">
        <h2>Lets make a bee together</h2>
        <form className="beeform" onSubmit={this.handleSubmit}>
          <label>
            Bee Name
              <select onChange={this.handleNameChange}>
              {this.state.names.map(name =>
                <option key={name.id} value={name.id}>
                  {name.name}
                </option>
              )}
            </select>
          </label>
          <label>
            How Friendly?
            <input onChange={e => this.setState({ friendliness: e.target.value })} type="number" />
          </label>
          <label>
            Are these ladies domesticated?
            <select onChange={e => this.setState({ domesticated: e.target.value })}>
              <option value="">select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>
            How well do they handle cold winters?
            <input onChange={e => this.setState({ winterization: e.target.value })} type="number" />
          </label>
          <label>
            Tell us a little about them
            <input onChange={e => this.setState({ characteristics: e.target.value })} type="text" />
          </label>
          <button>Submit your bee</button>
        </form>
      </div>
    )
  }
}
