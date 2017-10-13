import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Choose your data!</h1>
      <p className="lead">
        Option 1 lets you choose the date range to render stock data.
        <br />
        <Link to="/calendar">
        <button
          className="btn btn-primary"
          >
          Option 1
        </button>
      </Link>
      </p>
      <hr className="my-4"/>
      <p className="lead">
        Option 2 renders a stocks data from the past 5 years
      </p>
      <p className="lead">
      <Link to="/app">
        <button
          className="btn btn-primary"
          >
          Option 2
        </button>
      </Link>
      </p>
    </div>

  )
}

export default Header;