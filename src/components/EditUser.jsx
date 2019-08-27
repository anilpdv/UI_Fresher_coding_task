import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      year: '',
      city: '',
      country: '',
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onEnterDetails = this.onEnterDetails.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      year: this.props.year,
      city: this.props.city,
      country: this.props.country,
    });
  }

  onChangeValue(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onEnterDetails(e) {
    e.preventDefault();
    this.props.updateChanges(this.state);
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.onEnterDetails}>
        <lable for="firstName-label">First Name</lable>
        <input
          className="form-control mb-3"
          id="First Name-label"
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.onChangeValue}
        />

        <lable for="lastName-label">Last Name</lable>
        <input
          className="form-control mb-3"
          id="lastName-label"
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.onChangeValue}
        />

        <lable for="email-label">Email</lable>
        <input
          className="form-control mb-3"
          id="email-label"
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.onChangeValue}
        />

        <lable for="year-label">Enroll Year</lable>
        <input
          className="form-control mb-3"
          id="year-label"
          type="number"
          name="year"
          value={this.state.year}
          placeholder="year"
          onChange={this.onChangeValue}
        />

        <lable for="city-label">City</lable>
        <input
          className="form-control mb-3"
          id="city-label"
          type="text"
          name="city"
          value={this.state.city}
          placeholder="City"
          onChange={this.onChangeValue}
        />

        <lable for="Country-label">Country</lable>
        <input
          className="form-control mb-3"
          id="Country-label"
          type="text"
          name="country"
          value={this.state.country}
          placeholder="Country"
          onChange={this.onChangeValue}
        />

        <button class="btn btn-primary mt-3">submit</button>
        <span className="Login-link" />
      </form>
    );
  }
}

export default EditUser;
