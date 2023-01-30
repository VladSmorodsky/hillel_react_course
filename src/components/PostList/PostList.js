import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Notification from "../Notification/Notification";

class PostList extends Component {
  postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      showNotification: false,
      notificationText: '',
      posts: [],
    };
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async fetchPosts() {
    try {
      this.setState((prevState) => ({ ...prevState, isFetching: true}));
      const result = await axios.get(this.postsApiUrl);
      this.setState({ posts: result.data, isFetching: false});
    } catch (e) {
      console.log(e);
      this.setState((prevState) => ({ ...prevState, isFetching: false}));
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

      this.setState((prevState) => ({
        ...prevState,
        posts: updatedPosts,
        showNotification: true,
        notificationText: "Post was successfully updated",
      }));
    } catch (e) {
      console.log('[updatePost]', e);
    }
  }

  async deletePost(id) {
    try {
      const url = this.postsApiUrl + '/' + id;
      const result = await axios.delete(url);

      if (result.status === 200) {
        const updatedPosts = this.state.posts.filter(post => post.id !== id);
        this.setState((prevState) => ({
          ...prevState,
          posts: updatedPosts,
          showNotification: true,
          notificationText: "Post was successfully deleted",
        }));
      }
    } catch (e) {
      console.log('[deletePost]', e);
    }
  }

  render() {
    return (
      <>
        {this.state.posts.map(post => (
          <Post key={post.id}
                post={post}
                deletePost={this.deletePost}
                updatePost={this.updatePost}
          />
        ))}
        <p>{this.state.isFetching ? 'Fetching posts...' : '' }</p>
        <Notification show={this.state.showNotification} text={this.state.notificationText} />
      </>
    );
  }
}

export default PostList;