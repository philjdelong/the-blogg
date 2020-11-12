import React, { Component } from 'react'
import './App.css';
import User from './User/User.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, I'm <code className="p-text">Phil</code> and I like React.
        </p>
      <User name="Capo DeLong" age="7" feeling="Love">I really like turtles.</User>
      <User name="Brick Tomlinson" age="61" feeling="Throughly Enjoy">I love lamp.</User>
      </header>
    </div>
  );
}

export default App;
