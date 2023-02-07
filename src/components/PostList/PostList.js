import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Notification from "../Notification/Notification";
import EditPost from "../Post/EditPost/EditPost";
import DeletePost from "../Post/DeletePost/DeletePost";

class PostList extends Component {
  postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      showNotification: false,
      notificationText: '',
      posts: [],

      editablePost: null,
      deletedPost: null,

      showEditForm: false,
      showDeleteForm: false,
    };
    this.onPostEdit = this.onPostEdit.bind(this);
    this.onPostDelete = this.onPostDelete.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }

  hideNotification() {
    this.setState({
      showNotification: false,
    });
  }

  async fetchPosts() {
    try {
      this.setState({isFetching: true});
      const result = await axios.get(this.postsApiUrl);
      this.setState({ posts: result.data, isFetching: false});
    } catch (e) {
      this.setState({isFetching: false});
    }
  }

  componentDidMount() {
    this.fetchPosts();
  }

  onPostEdit(post) {
    this.setState({editablePost: post, showEditForm: true});
  }

  onPostDelete(post) {
    this.setState({deletedPost: post, showDeleteForm: true});
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

      this.setState({
        posts: updatedPosts,
        showEditForm: false,
        editablePost: null,
        showNotification: true,
        notificationText: "Post was successfully updated",
      });
    } catch (e) {}
  }

  async deletePost(id) {
    try {
      const url = this.postsApiUrl + '/' + id;
      const result = await axios.delete(url);

      if (result.status === 200) {
        const updatedPosts = this.state.posts.filter(post => post.id !== id);
        this.setState({
          showDeleteForm: false,
          deletedPost: null,
          posts: updatedPosts,
          showNotification: true,
          notificationText: "Post was successfully deleted",
        });
      }
    } catch (e) {}
  }

  render() {
    const {
      isFetching,
      posts,
      editablePost,
      showNotification,
      notificationText,
      showEditForm,
      deletedPost,
      showDeleteForm
    } = this.state;

    const editPostDialog = editablePost ?
      <EditPost show={showEditForm}
                postId={editablePost.id}
                postTitle={editablePost.title}
                updatePost={this.updatePost}
      /> : null;

    const deletePostDialog = deletedPost ?
      <DeletePost show={showDeleteForm}
                  id={deletedPost.id}
                  title={deletedPost.title}
                  deletePost={this.deletePost}
      /> : null;

    return (
      <>
        {posts.map(post => (
          <Post key={post.id}
                post={post}
                onEdit={this.onPostEdit}
                onDelete={this.onPostDelete}
          />
        ))}
        <p>{isFetching ? 'Fetching posts...' : '' }</p>

        { editPostDialog }
        { deletePostDialog }

        <Notification show={showNotification} 
                      text={notificationText}
                      onEndAction={this.hideNotification}
        />
      </>
    );
  }
}

export default PostList;
