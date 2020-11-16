import './Post.css'

const Post = (props) => {
    return(
        <div className="Post" >
            <h2 onClick={props.click}>{props.title} <code className="tag">({props.tag})</code></h2>
            <p className="text">{props.children}</p>
            <input className="input" onChange={props.changer}></input>
        </div>
    ) 
};

export default Post;