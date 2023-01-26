import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import EditPost from "./EditPost/EditPost";
import DeletePost from "./DeletePost/DeletePost";

class Post extends Component {
  state = {
    post: this.props.post,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState.post) !== JSON.stringify(this.props.post)) {
      this.setState((prevState) => ({...prevState, post: this.props.post}));
    }
  }

  render() {
    return (
      <>
        <Card className="my-3 mx-1">
          <Card.Body>
            <Card.Title>
              {this.state.post.title}
            </Card.Title>
            <Card.Text>
              {this.state.post.body}
            </Card.Text>
            <EditPost id={this.state.post.id}
                      title={this.state.post.title}
                      updatePost={this.props.updatePost}
            />
            <DeletePost id={this.state.post.id}
                        title={this.state.post.title}
                        deletePost={this.props.deletePost}
            />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Post;
