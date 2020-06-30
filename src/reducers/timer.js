import {
    READ_TIMER,
    START_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    FINISHED_TIMER
} from '../actions'

const initialState = {
    counter: 60,
    active: false,
    isWorking: true
}

export default (timer = initialState, action) => {
    switch(action.type) {
        case START_TIMER:
            return { ...timer, counter: timer.counter-1, active: true };
        case STOP_TIMER:
            return { ...timer, active: false };
        case RESET_TIMER:
            return { ...timer, counter: action.time*60, active: false };
        case READ_TIMER:
            return { ...timer, counter: action.time*60 };
        case FINISHED_TIMER:
            return { ...timer, isWorking: !timer.isWorking };
        default:
            return timer;
    }
}