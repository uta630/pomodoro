import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import todos from './todos'
import pomodoro from './pomodoro'

export default combineReducers({ todos, pomodoro, form })
