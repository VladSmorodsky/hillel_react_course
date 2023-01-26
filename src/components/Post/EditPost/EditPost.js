import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.title,
      show: false,
    };
    this.openModalWindow = this.openModalWindow.bind(this);
    this.closeModalWindow  = this.closeModalWindow.bind(this);
    this.updatePostTitle  = this.updatePostTitle.bind(this);
  }

  openModalWindow() {
    this.setState((prevState) => ({ ...prevState,  show: true}));
  }

  closeModalWindow() {
    this.setState((prevState) => ({ ...prevState,  show: false}));
  }

  async updatePostTitle() {
    try {
      this.props.updatePost(this.props.id, this.state.postTitle);
      this.closeModalWindow();
    } catch (e) {
      console.log('[editPost]', e);
    }
  }

  render() {
    return (
      <>
        <Button className="post-action_edit btn btn-primary mx-1"
                onClick={this.openModalWindow}>Edit
        </Button>
        <Modal show={this.state.show} onHide={this.closeModalWindow}>
          <Modal.Header>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="postTitle">Post title</label>
                <input type="text"
                       className="form-control"
                       id="postTitle"
                       placeholder="Enter post title"
                       value={this.state.postTitle}
                       onChange={(e) => this.setState((prevState) => ({...prevState, postTitle: e.target.value}))}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModalWindow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.updatePostTitle}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditPost;
