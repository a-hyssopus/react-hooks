import React from "react"
import { TodoProvider } from "./components/Todo/TodoContext";
import TodoList from "./components/Todo/TodoList";
import "./App.css"

function App() {
    return (
            <TodoProvider>
                <div className="app">
                    <TodoList />
                </div>
            </TodoProvider>
    );
}

export default App;