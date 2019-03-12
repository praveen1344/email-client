import React,{Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'

class FeedItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: props.isChecked,
      redirect: false
    }
    this.checkboxIdentifier = this.checkboxIdentifier.bind(this);
    this.redirectUrl = this.redirectUrl.bind(this);
  }

  handleChange = name => event => {
    this.setState({isChecked: event.target.checked});
    event.stopPropagation();
  };
  checkboxIdentifier(identifier){
    return 'mailfeed-checkbox-' + identifier;
  }
  redirectUrl(id){
    return '/details/' + id;
  }
  handleClick = (event) => {
    if(event.target.nodeName == "INPUT"){
      return
    }
    this.setState({
      redirect: true
    })
  }

  render(){
    let feedClass = 'feed-mail-item ';
    feedClass += (this.state.isChecked == true) ? 'checked' : '';

    if(this.state.redirect == true){
      return <Redirect to={this.redirectUrl(this.props.id)} />
    }
    else{
      return(
        <li id={this.props.id} className={feedClass} onClick={(e) => this.handleClick(e)}>
          <div className="feed-mail-checkbox">
            <Checkbox checked={this.state.isChecked} onChange={this.handleChange()} name="mailFeed" value={this.checkboxIdentifier(this.props.id)} />
          </div>
          <div className="feed-mail-sender">{this.props.sender}</div>
          <div className="feed-mail-subj">{this.props.subject}</div>
        </li>
      )
    }
  }
}

export default FeedItem;
