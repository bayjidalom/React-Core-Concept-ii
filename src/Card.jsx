export default function Card({ name, tech }) {
    const style = {
        border: '2px solid yellow',
        borderRadius: '15px'
    }
    return (
        <div style={style}>
            <h2>Name: {name}</h2>
            <p>TECH: {tech}</p>
        </div>
    )
}