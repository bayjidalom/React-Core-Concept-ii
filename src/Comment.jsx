
export default function Comment({ comment }) {
    console.log(comment)
    const { name, email, body } = comment;


    return (
        <div className="box">
            <h3>Name → {name}</h3>
            <p>Email → {email}</p>
            <p>Body →  {body}</p>

        </div>
    )
}