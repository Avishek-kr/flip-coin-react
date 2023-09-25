import React, { Component } from 'react'
import Color from './Color'

export class Colors extends Component {
  static defaultProps = {
    blocksNum: 18,
  }

  constructor(props) {
    super(props);
    this.generateRandomColor = this.generateRandomColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 

  generateRandomColor() {
    const number = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d'];
    let colors = '#';
    for (let i = 0; i < 6; i++) {
       colors += (number[Math.floor(Math.random() * number.length)]);   
    }

    return colors
  }

  handleClick(event) {
    event.target.style.background = this.generateRandomColor();
  }
  
  render() {
    return (
        <div>
            <h1>Color Boxes</h1>
            <div className='color__container'  onClick={this.handleClick}>
            {Array.from({length: this.props.blocksNum}).map(() => <Color color={this.generateRandomColor()} />)}
            </div>
        </div>
    )
  }
}

export default Colors