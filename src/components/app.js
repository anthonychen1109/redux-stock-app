import React, { Component } from 'react';

//CONTAINERS
import SearchBar from '../containers/search_bar';
import StockList from '../containers/stock_list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <StockList />
      </div>
    )
  }
}

export default App;