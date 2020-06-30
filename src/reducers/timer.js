import {
    READ_TIMER,
    COUNTER_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    FINISHED_TIMER
} from '../actions'

const initialState = {
    timer: 0,
    counter: 0,
    active: false,
    isWorking: true
}

export default (timer = initialState, action) => {
    switch(action.type) {
        case COUNTER_TIMER:
            return { ...timer, timer: timer.timer-1, active: true };
        case STOP_TIMER:
            return { ...timer, active: false };
        case RESET_TIMER:
            return { ...timer, timer: action.time*60, active: false };
        case READ_TIMER:
            return { ...timer, timer: action.time*60 };
        case FINISHED_TIMER:
            const finished = timer.isWorking ? timer.counter+1 : timer.counter
            return { ...timer, isWorking: !timer.isWorking, counter: finished };
        default:
            return timer;
    }
}