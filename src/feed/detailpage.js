import React,{ Component } from 'react';
import Loader from './../loader.js';

class DetailsPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      from: undefined,
      subject: undefined,
      body: undefined
    }
  }
  componentDidMount(){
    console.log(this.props.match.params.mailId)
    fetch('http://5c5a21f9af3ff700140de477.mockapi.io/api/email/' + this.props.match.params.mailId)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          isLoaded: true,
          from: res.from,
          subject: res.subject,
          body: res.text
        })
      })
  }
  render(){
    if(!this.state.isLoaded){
      return <Loader/>
    }
    else{
      return(
          <div>
            <h1>Mail {this.props.match.params.mailId} Details</h1>
            <div className='mail-details-container'>
              <div className="mail-details" name="recepient">
                <label>From: {this.state.from}</label>
              </div>
              <div className="mail-details" name="subject">
                <label>Subject: {this.state.subject}</label>
              </div>
              <div className="mail-detail-body">
                <div>{this.state.body}</div>
              </div>
            </div>
          </div>
      )
    }
  }
}

export default DetailsPage;
