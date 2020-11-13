import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post.js';
import Title from './Title/Title.js';

class App extends Component {
  state = {
    posts: [
      {title: "First Post", tag: "general"},
      {title: "Capo and Sampson", tag: "about"},
      {title: "Hobbies", tag: "about"},
    ]
  };
  
  postChanger = () => {
    this.setState({     
      posts: [
        {title: "New Title", tag: "general"},
        {title: "Teddles", tag: "RIP"},
        {title: "Hobbies", tag: "about"},
      ]
    });
    console.log("Click happens!");
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <button onClick={this.postChanger}>Update Post</button>
          <Post title={this.state.posts[0].title} tag={this.state.posts[0].tag}>Here's my first post on the BLOGG</Post>
          <Post title={this.state.posts[1].title} tag={this.state.posts[1].tag}>I love my animals!</Post>
          <Post title={this.state.posts[2].title} tag={this.state.posts[2].tag}>I enjoy Coding, Hiking, and Spending time with the family.</Post>
        </header>
      </div>
    );
  };
};

export default App;
