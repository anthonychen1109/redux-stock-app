import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTIONS
import { fetchData } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchData(this.state.symbol);
    this.setState({ symbol: '' });
  }

  onInputChange(event) {
    this.setState({ symbol: event.target.value });
  }

  render() {
    return (
      <div className="search-bar container">
        <br />
        <h6 className="search-bar-header">
          Enter a stock ticker below to render stock data from the past 5 years
        </h6>
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search for symbols or companies"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.symbol}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-primary"
            >
            Submit
          </button>
        </span>
      </form>
      </div>
    )
  }
}

export default connect(null, { fetchData })(SearchBar);