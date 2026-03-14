import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0)



    const handle1 = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handle4 = () => {
        const updatedFours = fours + 1;

        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
        setFours(updatedFours)
    }

    const handle6 = () => {
        const updatedSixes = sixes + 1;
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
        setSixes(updatedSixes)
    }

    const style = {
        border: '2px solid aqua',
        borderRadius: '15px ',
        marginBottom: '15px ',
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <div style={style}>
            <p><small>Sixes: {sixes}</small></p>
            <p><small>Fours: {fours}</small></p>
            <h3>Player : Glean Maxwell</h3>
            {
                runs > 50 && <p> Scored : 50</p>
            }
            <h2>Score : {runs}</h2>
            <button style={style} onClick={handle1}>Singles</button>

            <button style={style} onClick={handle4}>Fours</button>
            <button style={style} onClick={handle6}>Sixes</button>
        </div>
    )
}