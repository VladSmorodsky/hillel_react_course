import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";

class EditPost extends Component {
  state = {
    show: false,
    postTitle: '',
  }

  constructor(props) {
    super(props);

    this.openModalWindow = this.openModalWindow.bind(this);
    this.closeModalWindow  = this.closeModalWindow.bind(this);
    this.updatePostTitle  = this.updatePostTitle.bind(this);
  }

  openModalWindow() {
    this.setState({show: true});
  }

  closeModalWindow() {
    this.setState({show: false});
  }

  componentDidMount() {
    this.setState({postTitle: this.props.postTitle});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevState.show) !== JSON.stringify(this.props.show)) {
      this.setState({show: this.props.show});
    }
  }

  async updatePostTitle() {
    try {
      this.props.updatePost(this.props.postId, this.state.postTitle);
    } catch (e) {}
  }

  render() {
    if (!this.props.postTitle) {
      return null;
    }

    return (
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
                     onChange={(e) => this.setState({
                       postTitle: e.target.value
                     })}
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
    );
  }
}

export default EditPost;
