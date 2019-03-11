import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import PrimaryLinks from './primary-links.js';
import MailFeed from './feed/feed.js';
import CreateMail from './create/createmail.js';
import DetailsPage from './feed/detailpage.js';
import Loader from './loader.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false
    }
    this.isDataLoaded = this.isDataLoaded.bind(this);
  }
  isDataLoaded(val){
    this.setState({
      isLoaded: true
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          <Route exact path="/" component={MailFeed} />
          <Route path="/create" component={CreateMail} />
          <Route path="/details/:mailId" component={DetailsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
