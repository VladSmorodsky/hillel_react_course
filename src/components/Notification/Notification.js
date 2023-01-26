import React, {Component} from 'react';
import {Alert} from "react-bootstrap";
import './Notification.css';

class Notification extends Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.show !== this.props.show) {
      this.setState((prevState) => ({...prevState, show: true}));
      this.timerId = setTimeout(() => {
        this.setState((prevState) => ({...prevState, show: false}))
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <Alert show={this.state.show}
             className="notification-container"
             variant={this.props.variant ? this.props.variant : 'success'}
      >
        <p>
          {this.props.text}
        </p>
      </Alert>
    );
  }
}

export default Notification;