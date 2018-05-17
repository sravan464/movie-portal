import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 2
    };
  }
  onChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    const type = target.type;
    const val = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="name"
            aria-describedby="helpId"
            onChange={this.onChangeHandler}
          />
          <small id="helpId" className="text-muted">
            enter username
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="password"
            className="form-control"
            aria-describedby="helpId"
            onChange={this.onChangeHandler}
          />
          <small id="helpId" className="text-muted">
            password
          </small>
        </div>
        <div className="form-group">
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.onChangeHandler}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.onChangeHandler}
            />
          </label>
        </div>
      </div>
    );
  }
}
