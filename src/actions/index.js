export const READ_TODOS = 'READ_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const readTodos = () => dispatch => {
    return dispatch({ type: READ_TODOS })
}

export const addTodo = values => dispatch => {
    return dispatch({ type: ADD_TODO, values })
}

export const deleteTodo = index => dispatch => {
    return dispatch({ type: DELETE_TODO, index })
}
