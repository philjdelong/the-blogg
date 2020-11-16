import './Post.css'

const Post = (props) => {
    return(
        <div className="post" >
            <h2>{props.title} <code className="tag">({props.tag})</code></h2>
            <p className="text">{props.body}</p>
            <input className="input" onChange={props.updateBody}/>
            <p onClick={props.deletePost}>Delete</p>
        </div>
    ) 
};

export default Post;