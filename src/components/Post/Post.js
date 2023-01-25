import React, { Component } from "react";
import {Button, Card} from 'react-bootstrap';
import EditPost from "./EditPost/EditPost";

class Post extends Component {
  state = {
    post: this.props.post,
    isPostEdit: false,
  };

  constructor(props) {
    super(props);
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
            <EditPost id={this.state.post.id} title={this.state.post.title} updatePost={this.props.updatePost} />
            <Button className="post-action_delete btn btn-danger mx-1">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Post;
