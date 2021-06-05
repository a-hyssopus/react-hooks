import React from "react"
import Motivations from "./Motivations"
import { useMotivation } from "./MotivationContext"

const Motivation = () => {
    const motivation = useMotivation()

    return (
        <div className="motivations">
            <button onClick={motivation.toggleMotivation}>Get a bunch of pretentious motivational quotes in latin
            </button>
            <ul>
                <Motivations/>
            </ul>
        </div>
    )
}

export default Motivation