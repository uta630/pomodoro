import React, { Component } from "react";

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pomodoro: 25,
      short: 5,
      long: 15,
      delay: 4,
    };

    this.onChangePomodoro = this.onChangePomodoro.bind(this);
    this.onChangeShortRest = this.onChangeShortRest.bind(this);
    this.onChangeLongRest = this.onChangeLongRest.bind(this);
    this.onChangeDelay = this.onChangeDelay.bind(this);
  }

  onChangePomodoro(e) {
    this.setState({
      pomodoro: e.target.valueAsNumber,
    });
  }

  onChangeShortRest(e) {
    this.setState({
      short: e.target.valueAsNumber,
    });
  }

  onChangeLongRest(e) {
    this.setState({
      long: e.target.valueAsNumber,
    });
  }

  onChangeDelay(e) {
    this.setState({
      delay: e.target.valueAsNumber,
    });
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
              value={this.state.pomodoro}
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
              value={this.state.short}
              min={1}
              max={100}
              onChange={this.onChangeShortRest}
            />
          </label>
        </div>
        <div>
          <label>
            長い休憩
            <input
              type="number"
              value={this.state.long}
              min={1}
              max={100}
              onChange={this.onChangeLongRest}
            />
          </label>
        </div>
        <div>
          <label>
            長い休憩までの回数
            <input
              type="number"
              value={this.state.delay}
              min={1}
              max={100}
              onChange={this.onChangeDelay}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
