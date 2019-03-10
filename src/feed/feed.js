import React,{ Component } from 'react';
// import Map from 'Map'
import './feed.css';
import Loader from './../loader.js';

class MailFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: false,
        feedData: [],
        isLoaded: false
    };
  }

  componentDidMount(){
    fetch("https://5c5a21f9af3ff700140de477.mockapi.io/api/email")
      .then(res => res.json())
      .then((res) => {
        this.setState({
          isLoaded: true,
          feedData: res,
          error: false
        });
      })
  }
  render(){
    if(!this.state.isLoaded){
      return <Loader/>
    }
    else{
      return (
        <ul className="feed-container">
          {
            this.state.feedData.map(item => (
                <li id={item.id}>
                  {item.subject}
                </li>
            ))
          }
        </ul>
      )
    }
  }
}

export default MailFeed;
