import React, { Component } from 'react';

//CONTAINERS
import StockCalendarList from '../containers/stock_calendar_list';
import StockCalendar from '../containers/stock_calendar';

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <StockCalendar />
        <StockCalendarList />
      </div>
    );
  }
}
