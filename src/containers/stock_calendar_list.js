import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class StockCalendarList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderStock = this.renderStock.bind(this);
  }

  renderStock(Symbol) {
    console.log(this.props.Stock)
    const name = Symbol.dataset.dataset_code;
    const date = Symbol.dataset.data.map(data => data[0])
    const close = Symbol.dataset.data.map(data => data[1])
    const uniqueKey = `${name}${date}`;

    return (
      <tr key={uniqueKey}>
        <td>{name}</td>
        <td><Chart data={close} color="purple" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Close ($)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.Stock.map(this.renderStock)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ Stock }) {
  return {
    Stock
  }
}

export default connect(mapStateToProps, null)(StockCalendarList);