import { use } from "react"
import Comment from "./Comment"

export default function Comments({ commentsPromise }) {

    const comments = use(commentsPromise)
    console.log(comments)

    return (
        <div className="comments">
            <h3>Total Comments :  {comments.length}</h3>

            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    )
}