import {
    READ_TIMER,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from '../actions'

const initialState = {
    counter: 0,
    active: false
}

export default (timer = initialState, action) => {
    switch(action.type) {
        case START_TIMER:
            return { counter: timer.counter+1, active: true };
        case STOP_TIMER:
            return { counter: timer.counter, active: false };
        case RESET_TIMER:
            return { counter: 0, active: false };
        case READ_TIMER:
        default:
            return timer;
    }
}