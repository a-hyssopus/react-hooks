import React from "react"
import { quotes } from "./quotes"
import {useMotivation} from "./MotivationContext";

const Motivations = () => {
    const { show } = useMotivation()

     if (!show) return null

     return quotes.map(el => <li>{el}</li>)
}

export default Motivations