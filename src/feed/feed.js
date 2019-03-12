import React,{ Component } from 'react';
import './feed.css';
import Loader from './../loader.js';
import Checkbox from '@material-ui/core/Checkbox';
import FeedItem from './feed-item.js';

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
        res.map((item)=>(
          item.isChecked = false
        ));
        this.setState({
          isLoaded: true,
          feedData: res,
          error: false
        });
      });
  }

  render(){
    if(!this.state.isLoaded){
      return <Loader/>
    }
    else{
      return (
        <div>
          <h1>Mail Feed</h1>
          <ul className="feed-container">
            <li id="0" className="feed-mail-item feed-mail-header">
              <div className="feed-mail-checkbox"></div>
              <div className="feed-mail-sender">Sender</div>
              <div className="feed-mail-subj">Subject</div>
            </li>
            {
              this.state.feedData.map((item) => (
                <FeedItem id={item.id} isChecked={item.isChecked} sender={item.from} subject={item.subject}/>
              ))
            }
          </ul>
        </div>
      )
    }
  }
}

export default MailFeed;
