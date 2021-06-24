import React from "react"
import {useTodo} from "../Todo/TodoContext";

const RenderedTodosNumber = ( ) => {
    const todos = useTodo().todos

    return <h1>You have {todos.length} things to do</h1>
}

export default RenderedTodosNumber