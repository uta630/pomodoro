import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ title: "todo 1" }, { title: "todo 2" }, { title: "todo 3" }],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    if (e.target.title.value === "") return;
    e.target.title.value = "";

    this.state.todos.push({ title: e.target.title.value });
    this.setState({
      todos: this.state.todos,
    });
  }

  deleteTodo(index) {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos,
    });
  }

  render() {
    return (
      <div className="c-todos">
        <form onSubmit={this.addTodo}>
          <input type="text" name="title" />
          <button type="submit" onSubmit={this.addTodo}>
            +
          </button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <p key={index}>
              {item.title}
              <i onClick={this.deleteTodo}>removed</i>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
