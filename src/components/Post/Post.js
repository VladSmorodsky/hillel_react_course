import React, { Component } from "react";
import {Button, Card} from 'react-bootstrap';

class Post extends Component {
  state = {
    post: this.props.post,
  };

  constructor(props) {
    super(props);

    this.onPostEdit = this.onPostEdit.bind(this);
    this.onPostDelete = this.onPostDelete.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState.post) !== JSON.stringify(this.props.post)) {
      this.setState({post: this.props.post});
    }
  }

  onPostEdit() {
    this.props.onEdit(this.props.post);
  }

  onPostDelete() {
    this.props.onDelete(this.props.post);
  }

  render() {
    return (
      <Card className="my-3 mx-1">
        <Card.Body>
          <Card.Title>
            {this.state.post.title}
          </Card.Title>
          <Card.Text>
            {this.state.post.body}
          </Card.Text>
          <Button className="post-action_edit btn btn-primary mx-1"
                  onClick={this.onPostEdit}>Edit
          </Button>
          <Button className="post-action_edit btn btn-danger mx-1"
                  onClick={this.onPostDelete}>Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Post;
