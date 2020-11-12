import './User.css'

const User = (props) => {
    return(
        <div>
            <h2 className="User">{props.name}, {props.age}</h2>
            <p className="text">I <code className="feeling">{props.feeling}</code> React!</p>
            <p>{props.children}</p>
        </div>
    ) 
};

export default User;