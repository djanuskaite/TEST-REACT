import React, { Component } from 'react';
import './button.css';

export default class Contacts extends Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
    }
    makeOver() {
        this.setState({
            age: this.state.age + 10
        })
    }
    render() {
        return (
            <div className='kontaktciukai'>
                <h1>CONTACTS</h1>
                <h3>Vardas: {this.props.name}</h3>
                <p>El pastas: {this.props.email}</p>
                <p>Amzius: {this.state.age}</p>

                <div class="wrap">
                    <button className={"btnage"} onClick={this.makeOver.bind(this)}>Please click</button>
                </div>

            </div>
        )
    }
}