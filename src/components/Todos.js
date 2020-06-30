import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { readTodos, addTodo, deleteTodo } from '../actions';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.props.readTodos();
  }

  onSubmit(values){
    this.props.addTodo(values)
  }

  deleteTodo(index) {
    this.props.deleteTodo(index)
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <div className="c-todos">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="title" type="text" component="input" placeholder="todo is ..." />
          <button type="submit" disabled={pristine || submitting || invalid}>
            +
          </button>
        </form>
        <ul>
          {this.props.todos.map((item, index) => (
            <p key={index}>
              {item.title} | <i onClick={this.deleteTodo.bind(this,index)}>removed</i>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = ({ readTodos, addTodo, deleteTodo })
const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'todosForm' })(Todos)
)
