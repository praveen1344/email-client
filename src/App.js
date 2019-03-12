import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './jfImport-bg.jpg';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import PrimaryLinks from './primary-links.js';
import MailFeed from './feed/feed.js';
import CreateMail from './create/createmail.js';
import DetailsPage from './feed/detailpage.js';
import Loader from './loader.js';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';

// const primary = red[500];

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// global.classes = useStyles();

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
