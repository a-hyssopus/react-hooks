import React, { useEffect, useRef } from "react"
import { useTodo } from "./TodoContext"

const TodoForm = () => {
    const todo = useTodo()

    const [value, setValue] = React.useState("")
    const todoInputRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        todo.addTodo(value);
        setValue("");
    };

    useEffect(() => {
        console.log(`Todo to do: ${todoInputRef.current.value}`)
    }, [value])

    return (
        <div className="inputField">
            <form onSubmit={handleSubmit}>
                <input
                    ref={todoInputRef}
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm