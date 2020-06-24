import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      active: false,
    };

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
  }

  start() {
    if (!this.state.active) {
      this.setState({
        ...this.state,
        active: true,
      });

      this.countUp = setInterval(() => {
        this.setState({
          ...this.state,
          counter: this.state.counter + 1,
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.countUp);
    this.setState({
      ...this.state,
      active: false,
    });
  }

  reset() {
    clearInterval(this.countUp);
    this.setState({
      counter: 0,
      active: false,
    });
  }

  timeFormatter() {
    const counter = this.state.counter;
    const s = `0${counter % 60}`.slice(-2);
    const m = ("0" + parseInt((counter / 60) % 60)).slice(-2);

    return `${m}:${s}`;
  }

  render() {
    return (
      <div className="c-timer">
        <p>{this.timeFormatter()}</p>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Timer;
