import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//COMPONENTS
import Header from './header';
import App from './app';
import Calendar from './calendar';
import NotFoundPage from './notFoundPage';

const Home = () => {
  return (
    <BrowserRouter>
      <div className="homepage">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div className="navbar-nav">
              <Link className="navbar-item nav-link" to="/app">Select All</Link>
              <Link className="navbar-item nav-link" to="/calendar">Select Range</Link>
            </div>
          </div>
        </nav>
        <h3 className="stock-bar text-center">
          Stock Ticker
        </h3>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/app" component={App} />
        <Route path="/calendar" component={Calendar} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Home;