import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import todos from './todos'
import pomodoro from './pomodoro'
import timer from './timer'

export default combineReducers({ todos, pomodoro, timer, form })
