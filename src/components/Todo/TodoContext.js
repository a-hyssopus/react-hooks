import React, { useContext, useReducer } from "react"
import { initialState, reducer } from "./store/reducer";
import { ADD_TODO, REMOVE_TODO } from "./store/types";

const TodoContext = React.createContext()

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTodo = value => dispatch({ type: ADD_TODO, text: value })
    const removeTodo = index => dispatch({ type: REMOVE_TODO, index })

    return (
        <TodoContext.Provider value = {{
            show: state.show,
            todos: state.todos,
            addTodo,
            removeTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}