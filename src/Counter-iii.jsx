import { useState } from "react"

export default function Counterthree() {
    const [count, setCount] = useState(50)

    const minusHandler = () => {
        const newNumber = count - 1;
        setCount(newNumber)
    }

    return (
        <div className="comments">
            <h2>Count → {count}</h2>
            <button onClick={minusHandler}>Click to Subtract</button>
        </div>
    )
}