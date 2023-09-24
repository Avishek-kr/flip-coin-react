import React, { Component } from 'react'

class Coin extends Component {
    static defaultProps = {
        coins: [{ name: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' }, { name: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tail-jpg' }]
    }
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0,
            headCount: 0,
            tailCount: 0,
            choiceObj: null,
            loading: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        this.setState({loading: true});
        const choice = this.props.coins[Math.floor(Math.random() * this.props.coins.length)];
        setTimeout(() => {
            this.setState((prev) => ({
                choiceObj: choice,
                totalCount: this.state.totalCount + 1,
                headCount: prev.headCount + (choice.name === 'heads' ? 1 : 0),
                tailCount: prev.tailCount + (choice.name === 'tails' ? 1 : 0),
                loading: false
            }));
        }, 800);
    }

    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                <div className={`image_container ${this.state.loading ? 'animating': ''}`}>
                    {this.state.choiceObj && <img src={this.state.choiceObj.imgSrc} alt={this.state.choiceObj.name} />}
                </div>
                <button onClick={this.handleClick} disabled={this.state.loading ? true : false}>{this.state.loading ? 'FLIPPING...': 'FLIP MEEEE'}</button>
                <div className='total__counts'>Out of <b>{this.state.totalCount}</b>, there have been <b>{this.state.headCount}</b> heads and <b>{this.state.tailCount}</b> tails.</div>
            </div>
        )
    }
}

export default Coin