import React,{Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FeedItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: props.isChecked
    }
    // this.handleChange = this.handleChange.bind(this);
    this.checkboxIdentifier = this.checkboxIdentifier.bind(this);
    this.redirectUrl = this.redirectUrl.bind(this);
  }

  handleChange = name => event => {
    this.setState({isChecked: event.target.checked});
  };
  checkboxIdentifier(identifier){
    return 'mailfeed-checkbox-' + identifier;
  }
  redirectUrl(id){
    return '/details/' + id;
  }

  render(){
    let feedClass = 'feed-mail-item ';
    feedClass += (this.state.isChecked == true) ? 'checked' : '';
    return(
      <Link to={this.redirectUrl(this.props.id)}>
      <li id={this.props.id} className={feedClass} to={this.redirectUrl(this.props.id)}>
        <div className="feed-mail-checkbox">
          <Checkbox checked={this.state.isChecked} onChange={this.handleChange()} name="mailFeed" value={this.checkboxIdentifier(this.props.id)} />
        </div>
        <div className="feed-mail-sender">{this.props.sender}</div>
        <div className="feed-mail-subj">{this.props.subject}</div>
      </li>
      </Link>
    )
  }
}

export default FeedItem;
