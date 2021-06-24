import React, { useMemo, useState} from "react"
import { useTodo } from "./TodoContext";

function Todo ({ todo, index }) {
    const todos = useTodo()

    const [isTodoToEdit, setIsTodoToEdit] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo.text)
    const [done, setDone] = useState(false)

    const handleSubmitEdit = event => {
        event.preventDefault()
        if (!editedTodo) return
        setIsTodoToEdit(false)
    };

    const handleEditedTodo = event => {
        setEditedTodo(event.target.value)
    }

    let toggledTodo

    if (isTodoToEdit) {
        toggledTodo = <form className="form" onSubmit={handleSubmitEdit}>
            <input value={editedTodo} onChange={handleEditedTodo}/>
            <button>Save changes</button>
        </form>
    } else {
        toggledTodo = <>
            {editedTodo}
        </>
    }

    const todoStyle = useMemo(() => ({
        textDecoration: done ? "line-through" : "none"
    }), [done])

    return (
        <div className="todo">
            <p style={todoStyle} onClick={() => setIsTodoToEdit(true)}>{toggledTodo}</p>
            <>
                <div className="checkboxDelete">
                    <label>Done</label>
                    <input type="checkbox" value={done} onClick={() => setDone(!done)}/>
                    <button onClick={() => todos.removeTodo(index)}>x
                    </button>
                </div>
            </>
        </div>
    );
}

export default Todo