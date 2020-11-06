import React, { Component } from 'react';
import request from 'superagent';
import { fetchNames, createBee, newBeeName } from './Fetches.js';

const genericUser = {
  userId: 1,

};

export default class BeeInventor extends Component {

  state = {
    names: [],
    bees: {},
  }

  componentDidMount = async () => {
    const names = await fetchNames();
    this.setState({ names });

  }
  //this is where I left off. Not terrible. But slow!!


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
    await createBee(newBee);

    //take folks back to the bee page
    this.props.history.push('/');
  }
  //handling the name change
  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({ nameId: e.target.value })
  }

  handleSubmitName = async (e) => {
    e.preventDefault();

    const newName = { name: this.state.beeName, friendliness: this.state.newFriend };
    console.log(newName);
    await newBeeName(newName);

    await fetchNames();
    this.setState({ beeName: '', newFriend: 0 });
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
        <div className="beeName">
          <h2>Add a new type of bee</h2>
          <form onSubmit={this.handleSubmitName}>
            <label>
              New Bee Type
                <input onChange={e => this.setState({ beeName: e.target.value })} type="text" value={this.state.beeName} />
            </label>
            <label>
              Inherent Friendliness
                <input onChange={e => this.setState({ newFriend: e.target.value })} type="number" value={this.state.newFriend} />
            </label>
            <button>Submit</button>
          </form>
        </div>
      </div>

    )
  }
}
