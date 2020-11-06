import React, { Component } from 'react'
import './App.css';
import { fetchBees } from './Fetches.js';

export default class ListPage extends Component {
    state = {
        bees: [],
    }

    // fetchBees = async () => {
    //     const response = await fetch.get(`https://afternoon-sands-77287.herokuapp.com/bees`);
    //     this.setState({ beeStuff: response.body });
    //     console.log(response.body);
    // }

    componentDidMount = async () => {
        const bees = await fetchBees();

        this.setState({ bees })
    }

    render() {
        return (
            <div className="bee-container">
                <h1>Chadwick's Collegiate Collection of the <i>Apis Mellifera</i></h1>
                <h3>Where you find all of your bee needs solved</h3>

                <section className="bee-list">
                    {this.state.bees.map(bee =>
                        <div className="bee-item">
                            <h2>The {bee.name} Bee</h2>
                            <p>Overwintering: {bee.winterization}</p>
                            <p>{bee.characteristics}</p>
                            <p>Friendliness Factor: {bee.friendliness}</p>
                            {
                                bee.domesticated
                                    ? <div className="domesticated"> These ladies are domesticated
                                </div> :
                                    <div className="feral"> These girls are a wild bunch!
                                </div>
                            }
                        </div>
                    )}
                </section>

            </div>
        )
    }
}
