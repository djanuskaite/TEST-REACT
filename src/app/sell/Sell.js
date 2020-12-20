import React, { Component } from "react";
import './more.css';

export default class Sell extends Component {
    constructor() {
        super();
        this.state = { message: "" }
    }
    getDiscount() {
        this.setState({ message: "Get 20% discount right now!!!" })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <div className='container'>
                    <a href='#' className='btn' onClick={this.getDiscount.bind(this)}>More</a>
                </div>

            </div>
        )
    }
}