import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import RenderedTodosNumber from "../RenderedTodosNumber/RenderedTodosNumber";
import { useTodo } from "./TodoContext";

const TodoList = () => {
    const todos = useTodo().todos

    return (
        <div className="todo-list">
        <TodoForm/>
        {todos
            .map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                />
            ))}
        <h1>The page was rendered {useTodo().renderCounter.current} times</h1>
        <RenderedTodosNumber getNumberOfTodos={useTodo().calculateNumberOfTodos}/>
    </div>
)
}

export default TodoList
