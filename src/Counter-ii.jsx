import { useState } from "react"

export default function CounterTwo() {

    const [count, setCount] = useState(0)

    const handler = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div className="card">
            <h3>Countdown : {count}</h3>
            <button onClick={handler}>Click to add</button>
        </div>
    )
}