import React, {Component} from "react";
import './Person.css';

class Person extends Component {
  state = {
    name: 'Stepan',
    age: 25,
    personDataAreHidden: true,
    buttonText: 'Show'
  }

  changePersonData = () => {
    this.setState((prevState) => ({
      name: this.props.person.name ? this.props.person.name : prevState.name,
      age: this.props.person.age ? this.props.person.age : prevState.age,
      personDataAreHidden: !prevState.personDataAreHidden
    }));
  }

  render() {
    return (
      <div className={'person-data'}>
        <div className={this.state.personDataAreHidden ? 'btn-hidden' : ''}>
          Name: {this.state.name},
          age: {this.state.age}
        </div>
        <button onClick={this.changePersonData}>{this.state.personDataAreHidden ? 'Show' : 'Hide'}</button>
      </div>
    );
  }
}

export default Person;