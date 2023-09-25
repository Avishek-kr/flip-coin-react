import React, { Component } from 'react'

class Color extends Component {
  render() {
        return <div onClick={this.props.handleClick} className='color__content' style={{background: `${this.props.color}`}}></div>
    }
}

export default Color