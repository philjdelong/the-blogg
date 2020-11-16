import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post.js';
import Title from './Title/Title.js';

class App extends Component {
  state = {
    posts: [
      {_id: 1, title: "First Post", tag: "general", body: "Here we have some content"},
      {_id: 2, title: "Capo", tag: "Dog", body: "Different post. More content."},
    ],
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
  
  bodyUpdater = ( event, index ) => {
    const posts = [...this.state.posts]
    const post = posts[index]
    post.body = event.target.value
    this.setState({posts: posts})
  }

  deletePostHandler = (postIndex) => {
    const posts = [...this.state.posts];
    posts.splice(postIndex, 1);
    this.setState({posts: posts})
    console.log("Post Deleted")
  }
  
  render() {
    let posts = null

    if (this.state.showPosts) {
      posts = (
        <div>
          {
            this.state.posts.map((post, index) => {
              return <Post 
                tag={post.tag}
                title={post.title}
                body={post.body}
                deletePost={() => this.deletePostHandler(index)}
                key={post._id}
                updateBody={(event) => this.bodyUpdater(event, index)} />
            })
          }
        </div>
      );
    };

    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <button onClick={this.postChanger}>Toggle Posts</button>
          {posts}
        </header>
      </div>
    );
  };
};

export default App;
