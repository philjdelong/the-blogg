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
    ],
    username: '',
    showPosts: false,
  };
  
  postChanger = () => {
    if (!this.state.showPosts) {
      this.setState({     
        showPosts: true
      });
      console.log("Show me the posts!");
    } else {
      this.setState({     
        showPosts: false
      });
      console.log("Hide the posts!");
    }
  };
  
  tagChanger = (event) => {
    this.setState({     
      posts: [
        {title: "Title", tag: "general"},
        {title: "Teddles", tag: event.target.value},
        {title: "Hobbies", tag: "about"},
      ]
    });
  };

  inputUsername = (event) => {
    this.setState({
      username: event.target.value
    });

  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          {/* arrow function for button >> use .bind() to avoid 'over-rendering' */}
          <button onClick={() => this.postChanger()}>Toggle Posts</button>
          { this.state.showPosts ? 
            <div className="posts">
              <Post 
                title={this.state.posts[0].title} 
                tag={this.state.posts[0].tag}>
                  Here's my first post on the BLOGG
              </Post>
              <Post 
                title={this.state.posts[1].title} 
                tag={this.state.posts[1].tag}
                changer={this.tagChanger}>
                  I love my animals!
              </Post>
              <Post 
                title={this.state.posts[2].title} 
                tag={this.state.posts[2].tag}>
                  I enjoy Coding, Hiking, and Spending time with the family.
              </Post>
            </div> : null
          }
        </header>
      </div>
    );
  };
};

export default App;
