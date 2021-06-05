import { ADD_TODO, REMOVE_TODO } from "./actions";

export const initialState = {
    todos: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            console.log(action)
            if (!state.todos.some(todo => todo.text.toLowerCase() === action.text.toLowerCase() )) {
                const newTodos = [...state.todos, {text: action.text}]
                console.log(newTodos)
                return {
                    ...state,
                    todos: newTodos
                }
            } else {
                return state
            }
        }
        case REMOVE_TODO: {
                const newTodos = [...state.todos]
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