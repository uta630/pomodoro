import {
    READ_TODOS,
    ADD_TODO,
    DELETE_TODO
} from '../actions'

const initialState = [{ title: "todo 1" }, { title: "todo 2" }, { title: "todo 3" }]

export default (todos = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...todos, {...action.values}]
        case DELETE_TODO:
            const index = action.index
            const data = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ]
            return data;
        case READ_TODOS:
        default:
            return todos;
    }
}