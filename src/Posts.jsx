import { use } from "react"
import Post from './Post'

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise)
    // console.log(posts)
    return (
        <div className="aqua">
            <h3>All Posts Are Here</h3>
            {
                posts.map(post =>
                    <Post key={post.id} post={post}></Post>)
            }

        </div>
    )
}