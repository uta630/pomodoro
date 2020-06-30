import {
    READ_POMODORO,
    UPDATE_POMODORO
} from '../actions'

const initialState = {
    pomodoro: .1,
    short: .05,
    long: .2,
    delay: 3,
}

export default (pomodoro = initialState, action) => {
    switch(action.type) {
        case UPDATE_POMODORO:
            return { ...pomodoro, [action.target.name]: action.target.value*1 };
        case READ_POMODORO:
        default:
            return pomodoro;
    }
}