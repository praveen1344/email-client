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

    this.checkboxIdentifier = this.checkboxIdentifier.bind(this);
  }

  componentDidMount(){
    fetch("https://5c5a21f9af3ff700140de477.mockapi.io/api/email")
      .then(res => res.json())
      .then((res) => {
        res.map((item)=>(
          item.isChecked = true
        ));
        this.setState({
          isLoaded: true,
          feedData: res,
          error: false
        });
        console.log(this.state.feedData)
      })
  }
  checkboxIdentifier(identifier){
    return 'mailfeed-checkbox-' + identifier;
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
                <li id={item.id} className='feed-mail-item'>
                  <div className="feed-mail-checkbox">
                    <label for={this.checkboxIdentifier(item.id)}></label>
                    <input type="checkbox" name="mailFeed" value={item.isChecked} id={this.checkboxIdentifier(item.id)}/>
                  </div>
                  <div className="feed-mail-sender">{item.from}</div>
                  <div className="feed-mail-subj">{item.subject}</div>
                </li>
            ))
          }
        </ul>
      )
    }
  }
}

export default MailFeed;
