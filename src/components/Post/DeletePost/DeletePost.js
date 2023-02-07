import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";

class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: null,
      show: false
    };
    this.openModalWindow = this.openModalWindow.bind(this);
    this.closeModalWindow  = this.closeModalWindow.bind(this);
    this.deletePost  = this.deletePost.bind(this);
  }

  openModalWindow() {
    this.setState({show: true});
  }

  closeModalWindow() {
    this.setState({show: false});
  }

  deletePost() {
    try {
      this.props.deletePost(this.props.id);
    } catch (e) {}
  }

  componentDidMount() {
    this.setState({postTitle: this.props.title, show: this.props.show});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.postTitle !== this.props.title) {
      this.setState({postTitle: this.props.title});
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.closeModalWindow}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Post <strong>{this.state.postTitle}</strong> will be removed</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.deletePost}>
            Delete Post
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeletePost;
