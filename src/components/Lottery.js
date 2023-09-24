import React, { Component } from "react";
import Lotto from "./Lotto";
import './Lotto.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxNum: 40,
        maxBalls: 6,
    }
    constructor(props) {
        super(props);
        this.state = { num: Array.from({ length: this.props.maxBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }
    generate() {
        for (let index = 0; index < this.state.num.length; index++) {
            this.setState(curState => ({
                num: curState.num.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
            }))

        }
    }
    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <div className="lotto__content">
                        {this.state.num.map((indiBall, index) => (
                            <Lotto key={index} number={indiBall} />
                        ))}
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
                </div>
            </div>
        )
    }
}


export default Lottery;