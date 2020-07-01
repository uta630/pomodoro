import React, { Component } from "react";
import { connect } from 'react-redux'
import { readTimer, counterTimer, stopTimer, resetTimer, finishedTimer, readPomodoro } from "../actions"

class Timer extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.props.readPomodoro();
    this.props.readTimer(this.assignTime());
  }

  start() {
    if (!this.props.timer.active) {
      this.countUp = setInterval(() => {
        this.ifFinished()
        this.props.counterTimer()
      }, 1000);
    }
  }

  ifFinished() {
    if(this.props.timer.timer === 0) {
      this.props.finishedTimer()
      this.props.resetTimer(this.assignTime())
    }
  }

  stop() {
    clearInterval(this.countUp)
    this.props.stopTimer()
  }

  reset() {
    clearInterval(this.countUp)
    this.props.resetTimer(this.assignTime())
  }

  timeFormatter() {
    const counter = this.props.timer.timer;
    const s = `0${counter % 60}`.slice(-2);
    const m = ("0" + parseInt((counter / 60) % 60)).slice(-2);

    return `${m}:${s}`;
  }

  assignTime() {
    if(this.props.timer.counter % this.props.pomodoro.delay === 0 && !this.props.timer.isWorking) {
      return this.props.pomodoro.long
    } else if(this.props.timer.isWorking) {
      return this.props.pomodoro.pomodoro
    } else {
      return this.props.pomodoro.short
    }
  }

  render() {
    return (
      <div className="c-timer">
        <p>{this.props.timer.isWorking ? 'working': 'Break time'}</p>
        <p>{this.timeFormatter()}</p>
        <p>Done:{this.props.timer.counter}</p>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ timer: state.timer, pomodoro: state.pomodoro })
const mapDispatchToProps = ({ readTimer, counterTimer, stopTimer, resetTimer, finishedTimer, readPomodoro })

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
