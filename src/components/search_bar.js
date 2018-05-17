import React, { Component } from 'react';
export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" style={{ color: 'white' }}>
            Movie Portal
          </a>
          <form className="form-inline">
            <input
              style={{ width: '700px' }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="navBarSearchForm"
              onChange={this.props.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
