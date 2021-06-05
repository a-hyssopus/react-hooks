import React, { useState, useContext } from "react"

const MotivationContext = React.createContext()

export const useMotivation = () => {
    return useContext(MotivationContext)
}

export const MotivationProvider = ({ children }) => {
    const [showMotivation, setShowMotivation] = useState(false)

    const toggleMotivation = () => setShowMotivation(!showMotivation)

    return (
        <MotivationContext.Provider value = {{
            show: showMotivation,
            toggleMotivation
        }}>
            {children}
        </MotivationContext.Provider>
    )
}