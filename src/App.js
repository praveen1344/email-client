import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './jfImport-bg.jpg'

import PrimaryLinks from './primary-links.js';
import MailFeed from './feed/feed.js';
import CreateMail from './create/createmail.js';
import DetailsPage from './feed/detailpage.js';
import Loader from './loader.js';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

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
          <Tabs
            variant="fullWidth"
          >
            <Tab label="List" id="0" component={Link} to="/"></Tab>
            <Tab label="Create" id="1" component={Link} to="/create"></Tab>
          </Tabs>

          <Route exact path="/" component={MailFeed} />
          <Route exact path="/create" component={CreateMail} />
          <Route exact path="/details/:mailId" component={DetailsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
