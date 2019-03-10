import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PrimaryLinks from './primary-links.js';
import MailFeed from './feed/feed.js';
import Loader from './loader.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      is: 'praveen'
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
      <div className="App">
        <PrimaryLinks action="list" linkTo="LIST"/>
        <PrimaryLinks action="create" linkTo="CREATE"/>
        <div>
          <MailFeed/>
        </div>
      </div>
    );
  }
}

export default App;
