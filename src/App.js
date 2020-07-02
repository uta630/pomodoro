import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todos from "./components/Todos";
import Pomodoro from "./components/Pomodoro";
import NotifyButton from "./components/NotifyButton";
import UnregisterButton from "./components/UnregisterButton";
import RegisterButton from "./components/RegisterButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>pomodoro</h1>
        <hr />
        <Pomodoro />
        <hr />
        <Timer />
        <hr />
        <Todos />
        <hr />
        <RegisterButton />
        <NotifyButton />
        <UnregisterButton />
      </div>
    );
  }
}

export default App;
