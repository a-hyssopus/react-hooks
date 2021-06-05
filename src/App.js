import React from "react"
import Motivation from "./components/Motivation/Motivation"
import { MotivationProvider } from "./components/Motivation/MotivationContext"
import { TodoProvider } from "./components/Todo/TodoContext";
import TodoList from "./components/Todo/TodoList";
import "./App.css"

function App() {
    return (
        <MotivationProvider>
            <TodoProvider>
                <div className="app">
                    <TodoList />
                    <Motivation/>
                </div>
            </TodoProvider>
        </MotivationProvider>
    );
}

export default App;