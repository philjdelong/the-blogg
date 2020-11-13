import './Post.css'

const Post = (props) => {
    return(
        <div>
            <h2 className="Post">{props.title} <code className="tag">({props.tag})</code></h2>
            <p>{props.children}</p>
        </div>
    ) 
};

export default Post;