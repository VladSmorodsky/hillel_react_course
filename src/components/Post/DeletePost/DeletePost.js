import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";

class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.title,
      show: false
    };
    this.openModalWindow = this.openModalWindow.bind(this);
    this.closeModalWindow  = this.closeModalWindow.bind(this);
    this.deletePost  = this.deletePost.bind(this);
  }

  openModalWindow() {
    this.setState((prevState) => ({ ...prevState,  show: true}));
  }

  closeModalWindow() {
    this.setState((prevState) => ({ ...prevState,  show: false}));
  }

  async deletePost() {
    try {
      this.props.deletePost(this.props.id);
      this.closeModalWindow();
    } catch (e) {
      console.log('[deletePost]', e);
    }
  }

  render() {
    return (
      <>
        <Button className="post-action_edit btn btn-danger mx-1"
                onClick={this.openModalWindow}>Delete
        </Button>
        <Modal show={this.state.show} onHide={this.closeModalWindow}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Post <strong>{this.state.postTitle}</strong> will be removed!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.deletePost}>
              Delete Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DeletePost;
