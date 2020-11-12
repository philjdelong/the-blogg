import React, { Component } from 'react'
import './App.css';
import User from './User/User.js'
import Title from './Title/Title.js'

// can only set state using this type of "Class-based component"
class App extends Component {
  state = {
    users: [
      {name: "Phil DeLong", age: 30, feeling: "Love"},
      {name: "Capo DeLong", age: 7, feeling: "Thoroughly enjoy"},
      {name: "Brick Tomlinson", age: 61, feeling: "Want tomato."}
    ]
  };

  switchUserHandler = () => {
    console.log("Clicked!")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <button onClick={this.switchUserHandler}>Switch User</button>
          <User name={this.state.users[0].name} age={this.state.users[0].age} feeling={this.state.users[0].feeling}></User>
          <User name={this.state.users[1].name} age={this.state.users[1].age} feeling={this.state.users[1].feeling}></User>
          <User name={this.state.users[2].name} age={this.state.users[2].age} feeling={this.state.users[2].feeling}>I love lamp.</User>
        </header>
      </div>
    );
  }
}

export default App;
