import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import RenderedTodosNumber from "../RenderedTodosNumber/RenderedTodosNumber";
import {useTodo} from "./TodoContext";

const TodoList = () => {
    const todos = useTodo().todos

    return (
        <div className="todo-list">
            <TodoForm/>
            {todos
                .map((todo, index) => {
                    console.log(todo.text)
                    return <Todo
                        key={todo.text}
                        index={index}
                        todo={todo}
                    />
                })
            }
            <RenderedTodosNumber/>
        </div>
    )
}

export default TodoList
