
export default function Post({post}){
    // console.log(post)

    const {title, body} = post;

    return(
        <div className="aqua">
            <p>Title: {title}</p>
            <p>Description: {body}</p>
        </div>
    )
}