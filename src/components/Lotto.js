import React, { Component } from 'react';
import './Lotto.css';

export class Lotto extends Component {
  render() {
    return (
        <span>{this.props.number}</span>
    )
  }
}

export default Lotto