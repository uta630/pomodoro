import React, { Component } from 'react';
import * as serviceWorker from '../serviceWorker'

class UnregisterButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    serviceWorker.unregister()
    console.log('ServiceWorker unregistered')
  }

  render() {
    return <button onClick={this.handleClick}>{'Unregister'}</button>
  }
}

export default UnregisterButton;