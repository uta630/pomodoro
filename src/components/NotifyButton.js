import React, { Component } from 'react';
import { TriggerAPI } from '../endpoint'

class NotifyButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const msg = {
      msg: new Date().toLocaleString(),
    }
    fetch(TriggerAPI, {
      method: 'POST',
      body: JSON.stringify(msg),
    })

    console.log('Just triggered server to publish notifications.')
  }

  render() {
    return <button onClick={this.handleClick}>{'Notify'}</button>
  }
}

export default NotifyButton;