import React, { Component } from 'react';

//CONTAINERS
import StockCalendar from './stock_calendar';

class SearchCalendar extends Component {
  render() {
    return (
      <div>
        <p className="text-center">Please select a date range</p>
        <div className="row">
          <div className="calendar">
          <p>Start</p>
            <StockCalendar />
          </div>
          <div className="calendar">
          <p>End</p>
            <StockCalendar />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchCalendar;