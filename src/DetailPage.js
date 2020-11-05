import React, { Component } from 'react'
import './App.css';
import fetch from 'superagent';

export default class DetailPage extends Component {
    state = {
        beeStuff: [],
    }

    fetchBees = async () => {
        const response = await fetch.get(`https://afternoon-sands-77287.herokuapp.com/bees`);
        this.setState({ beeStuff: response.body });
        console.log(response.body);
    }

    componentDidMount = async () => {
        await this.fetchBees();
    }

    render() {
        return (
            <div>
                <h1>Chadwick's Collegiate Collection of the <i>Apis Mellifera</i></h1>
                <p> Still need to get the create bee page with form and dropdown</p>
                <section className="bee-list">
                    {this.state.beeStuff.map(bee =>
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
