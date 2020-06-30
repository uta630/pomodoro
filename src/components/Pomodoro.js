import React, { Component } from "react";
import { connect } from "react-redux";
import { readPomodoro, updatePomodoro } from "../actions"

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.onChangePomodoro = this.onChangePomodoro.bind(this);
  }

  componentDidMount() {
    this.props.readPomodoro()
  }

  onChangePomodoro(e) {
    this.props.updatePomodoro(e.target)
  }

  render() {
    return (
      <div className="c-setting">
        <h3>pomodoro settings</h3>
        <div>
          <label>
            稼働時間
            <input
              type="number"
              name="pomodoro"
              value={this.props.pomodoro.pomodoro}
              min={1}
              max={100}
              onChange={this.onChangePomodoro}
            />
          </label>
        </div>
        <div>
          <label>
            短い休憩
            <input
              type="number"
              name="short"
              value={this.props.pomodoro.short}
              min={1}
              max={100}
              onChange={this.onChangePomodoro}
            />
          </label>
        </div>
        <div>
          <label>
            長い休憩
            <input
              type="number"
              name="long"
              value={this.props.pomodoro.long}
              min={1}
              max={100}
              onChange={this.onChangePomodoro}
            />
          </label>
        </div>
        <div>
          <label>
            長い休憩までの回数
            <input
              type="number"
              name="delay"
              value={this.props.pomodoro.delay}
              min={1}
              max={100}
              onChange={this.onChangePomodoro}
            />
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ pomodoro: state.pomodoro })
const mapDispatchToProps = ({ readPomodoro, updatePomodoro })

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
