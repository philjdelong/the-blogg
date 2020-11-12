import './User.css'

function User(props) {
    return(
        <div>
            <h1 className="title">{props.name}, {props.age}</h1>
            <p className="User">I <code className="feeling">{props.feeling}</code> React!</p>
            <p>{props.children}</p>
        </div>
    ) 
};

export default User;