import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";

class PostList extends Component {
  postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      posts: [],
    };
    this.updatePost = this.updatePost.bind(this);
  }

  async fetchPosts() {
    try {
      this.setState({ ...this.state, isFetching: true});
      const result = await axios.get(this.postsApiUrl);
      this.setState({ posts: result.data, isFetching: false});
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false});
    }
  }

  componentDidMount() {
    this.fetchPosts();
  }

  async updatePost(id, newTitle) {
    try {
      const url = this.postsApiUrl + '/' + id;
      const result = await axios.put(url, {
        title: newTitle
      });

      const updatedPosts = this.state.posts.map((post) => {
        if (post.id === id) {
          return {...post, title: result.data.title}
        }

        return post;
      });
      await this.setState({...this.state, posts: updatedPosts});
    } catch (e) {
      console.log('[updatePost]', e);
    }
  }

  render() {
    console.log('[posts]', this.state.posts);
    return (
      <>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} updatePost={this.updatePost} />
        ))}
        <p>{this.state.isFetching ? 'Fetching posts...' : '' }</p>
      </>
    );
  }
}

export default PostList;