import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar/build/entry.nostyle';
import moment from 'moment';

//ACTIONS
import { fetchSelectedData } from '../actions';

class StockCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      formattedDate: new Date(),
      start: '',
      end: '',
      symbol: '',
      buttonDisabled: true
    };
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    return moment(date).format('YYYY-MM-DD');
  }

  onChangeStart = (date) => {
    // let formatted = this.formatDate(date);
    this.setState({ start: this.formatDate(date)});
    console.log(this.state.start)
  }

  onChangeEnd = (date) => {
    // let formatted = this.formatDate(date);
    this.setState({ end: this.formatDate(date)});
    this.setState({ buttonDisabled: !this.state.buttonDisabled})
    console.log(this.state.end)
  }

  onInputChange(event) {
    this.setState({ symbol: event.target.value });
  }

  onFormSubmit(event) {
    console.log("test")
    event.preventDefault();
    this.props.fetchSelectedData(this.state.symbol, this.state.start, this.state.end);
    this.setState({ symbol: '' });
  }

  render() {
    return (
      <div>
        <p className="text-center">Please select a date range</p>
        <div className="row">
          <div className="calendar">
          <p>Start</p>
          <Calendar onChange={this.onChangeStart}/>
          </div>
          <div className="calendar">
          <p>End</p>
          <Calendar onChange={this.onChangeEnd}/>
          </div>
      </div>
      <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            placeholder="Enter a symbol"
            onChange={this.onInputChange}
            value={this.state.symbol}
            />
          <span className="input-group-btn">
            <button
              disabled = {this.state.buttonDisabled}
              className="btn btn-secondary"
              >
              Submit
            </button>
          </span>
        </form>
      </div>
    )
  }
}


export default connect(null, { fetchSelectedData })(StockCalendar);