import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class StockList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderStock = this.renderStock.bind(this);
  }

  renderStock(Symbol) {
    const name = Symbol.dataset.dataset_code;
    const description = Symbol.dataset.name;
    const date = Symbol.dataset.data.map(data => data[0])
    const open = Symbol.dataset.data.map(data => data[1])
    const high = Symbol.dataset.data.map(data => data[2])
    const low = Symbol.dataset.data.map(data => data[3])
    const close = Symbol.dataset.data.map(data => data[4])
    const volume = Symbol.dataset.data.map(data => data[5])
    const uniqueKey = `${name}${date}`;

    return (
      <tr key={uniqueKey}>
        <td>{name}</td>
        <td><Chart data={open} color="green" /></td>
        <td><Chart data={high} color="blue" /></td>
        <td><Chart data={low} color="red" /></td>
        <td><Chart data={close} color="purple" /></td>
        <td><Chart data={volume} color="orange" /></td>
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
            <th>Open ($)</th>
            <th>High ($)</th>
            <th>Low ($)</th>
            <th>Volume (Millions)</th>
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

export default connect(mapStateToProps, null)(StockList);