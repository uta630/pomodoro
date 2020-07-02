import React, { Component } from 'react';
import * as serviceWorker from '../serviceWorker'

class RegisterButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    serviceWorker.register()
    console.log('ServiceWorker registered')
  }

  render() {
    return <button onClick={this.handleClick}>{'Register'}</button>
  }
}

export default RegisterButton;