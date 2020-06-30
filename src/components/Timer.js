import React, { Component } from "react";
import { connect } from 'react-redux'
import { readTimer, startTimer, stopTimer, resetTimer } from "../actions"

class Timer extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.props.readTimer();
  }

  start() {
    if (!this.props.timer.active) {
      this.countUp = setInterval(() => {
        this.props.startTimer()
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.countUp)
    this.props.stopTimer()
  }

  reset() {
    clearInterval(this.countUp)
    this.props.resetTimer()
  }

  timeFormatter() {
    const counter = this.props.timer.counter;
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

const mapStateToProps = state => ({ timer: state.timer })
const mapDispatchToProps = ({ readTimer, startTimer, stopTimer, resetTimer })

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
