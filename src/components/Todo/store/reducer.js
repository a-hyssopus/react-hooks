import { ADD_TODO, REMOVE_TODO } from "./types";

export const initialState = {
    todos: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            if (!state.todos.some(todo => todo.text.toLowerCase() === action.text.toLowerCase() )) {
                const newTodos = [...state.todos, {text: action.text}]
                return {
                    ...state,
                    todos: newTodos
                }
            } else {
                return state
            }
        }
        case REMOVE_TODO: {
            const newTodos = [...state.todos];

            newTodos.splice(action.index, 1)
                return {
                    ...state,
                    todos: newTodos
                }
            }
        default:
            return state
    }
}