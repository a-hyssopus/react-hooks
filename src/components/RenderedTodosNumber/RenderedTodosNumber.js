import React, { useEffect } from "react"

const RenderedTodosNumber = ({ getNumberOfTodos }) => {
    useEffect(() => {
        console.log("Rendered Get Number Of Todos")
    }, [getNumberOfTodos])

    return <h1>You have {getNumberOfTodos()} things to do</h1>
}


export default RenderedTodosNumber