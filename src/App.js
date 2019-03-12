import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import PrimaryLinks from './primary-links.js';
import MailFeed from './feed/feed.js';
import CreateMail from './create/createmail.js';
import DetailsPage from './feed/detailpage.js';
import Loader from './loader.js';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

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
          <div className="navigation-bar">
            <Tabs variant="fullWidth">
              <Tab color="primary" label="List" component={Link} to="/"></Tab>
              <Tab color="primary" label="Create" component={Link} to="/create"></Tab>
            </Tabs>
          </div>
          <div className="grid">
            <Route exact path="/" component={MailFeed} />
            <Route exact path="/create" component={CreateMail} />
            <Route exact path="/details/:mailId" component={DetailsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
