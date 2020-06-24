import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todos from "./components/Todos";
import Pomodoro from "./components/Pomodoro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>pomodoro app</h1>
        <hr />
        <Pomodoro />
        <hr />
        <Timer />
        <hr />
        <Todos />
      </div>
    );
  }
}

export default App;
