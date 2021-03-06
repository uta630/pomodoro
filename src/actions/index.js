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

export const READ_POMODORO = 'READ_POMODORO'
export const UPDATE_POMODORO = 'UPDATE_POMODORO'
export const readPomodoro = () => dispatch => {
    return dispatch({ type: READ_POMODORO })
}
export const updatePomodoro = target => dispatch => {
    return dispatch({ type: UPDATE_POMODORO, target })
}

export const READ_TIMER = 'READ_TIMER'
export const COUNTER_TIMER = 'COUNTER_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const FINISHED_TIMER = 'FINISHED_TIMER'
export const readTimer = time => dispatch => {
    return dispatch({ type: READ_TIMER, time })
}
export const counterTimer = () => dispatch => {
    return dispatch({ type: COUNTER_TIMER })
}
export const stopTimer = () => dispatch => {
    return dispatch({ type: STOP_TIMER })
}
export const resetTimer = time => dispatch => {
    return dispatch({ type: RESET_TIMER, time })
}
export const finishedTimer = () => dispatch => {
    return dispatch({ type: FINISHED_TIMER })
}
