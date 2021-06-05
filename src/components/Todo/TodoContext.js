import React, { useCallback, useContext, useEffect, useReducer, useRef, useState } from "react"
import { initialState, reducer } from "./store/reducer";
import {ADD_TODO, REMOVE_TODO} from "./store/actions";

const TodoContext = React.createContext()

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [todos, setTodos] = useState([]);
    const renderCounter = useRef(1)

    useEffect(() => {
        renderCounter.current++
    })

    const calculateNumberOfTodos = useCallback(() => {
        return todos.length
    }, [todos.length])

    const addTodo = value => dispatch({ type: ADD_TODO, text: value })
    const removeTodo = index => dispatch({ type: REMOVE_TODO, index })

    return (
        <TodoContext.Provider value = {{
            show: state.show,
            todos: state.todos,
            renderCounter,
            addTodo,
            removeTodo,
            calculateNumberOfTodos,
        }}>
            {children}
        </TodoContext.Provider>
    )
}