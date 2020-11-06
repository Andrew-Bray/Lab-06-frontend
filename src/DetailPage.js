import React, { Component } from 'react';
import { fetchBee, updateBee, fetchNames } from './Fetches.js';

const genericUser = {
  userId: 1
};

export default class detail extends Component {

  state = {
    names: [],
    fr: 0,
    dom: true,
    win: 1,
    char: '',
  }


  componentDidMount = async () => {
    const names = await fetchNames(this.props.match.params.id);
    const bee = await fetchBee(this.props.match.params.id);

    //NOW do a find where we return the 'names" where the names.name and the bee.name match
    const beeNameAsAString = bee.name;
    console.log(bee.name);

    const matchingName = names.find((name) => {
      return name.name === beeNameAsAString;
    })

    this.setState({
      names: names,
      nameId: matchingName.id,
      fr: bee.friendliness,
      dom: bee.domesticated,
      win: bee.winterization,
      char: bee.characteristics
    });
  }

  //submit actions
  handleSubmit = async (e) => {
    e.preventDefault();

    //making a new bee from the form data ANd the generic user
    const newBee = {
      name_id: this.state.nameId,
      friendliness: this.state.fr,
      domesticated: this.state.dom,
      winterization: this.state.win,
      characteristics: this.state.char,
      owner_id: genericUser.userId,
    };

    //send data to our endpoint useing post and send
    updateBee(this.props.match.params.id, newBee);

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
        <h2>Lets update a bee together</h2>
        <form className="beeform" onSubmit={this.handleSubmit}>
          <label>
            Bee Name
              <select onChange={this.handleNameChange}>
              {this.state.names.map(name =>
                <option
                  selected={this.state.nameID === name.id}
                  key={name.id}
                  value={name.id}>
                  {name.name}
                </option>
              )}
            </select>
          </label>
          <label>
            How Friendly?
            <input value={this.state.fr} onChange={e => this.setState({ fr: e.target.value })} type="number" />
          </label>
          <label>
            Are these ladies domesticated?
            <select value={this.state.dom} onChange={e => this.setState({ dom: e.target.value })}>
              <option value="">select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>
            How well do they handle cold winters?
            <input value={this.state.win} vonChange={e => this.setState({ win: e.target.value })} type="number" />
          </label>
          <label>
            Tell us a little about them
            <input value={this.state.char} onChange={e => this.setState({ char: e.target.value })} type="text" />
          </label>
          <button>Submit your bee</button>
        </form>
      </div>
    )
  }
}
