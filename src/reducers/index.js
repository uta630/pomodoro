import { combineReducers } from 'redux'

const initialState = {}

export const reduce = (data = initialState, actions) => {
    switch(actions.type) {
        case 1:
            return data;
        case 2:
            return data;
        default:
            return data;
    }
}

export default combineReducers({ reduce })
