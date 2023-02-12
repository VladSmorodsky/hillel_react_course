import React, {Component} from 'react';
import {Alert} from "react-bootstrap";
import './Notification.css';

class Notification extends Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if(prevProps.show !== this.props.show){
      this.setState({show: this.props.show});
    }

    if(prevState.show !== this.props.show && this.state.show){
      this.timerId = setTimeout(()=>{
        this.setState({show: false});
        this.props.onEndAction();
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
    this.setState({show: false});
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