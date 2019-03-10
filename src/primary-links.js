import React,{Component} from 'react';

class PrimaryLinks extends Component{
  render(){
    return(
      <a href="{this.props.action}">{this.props.linkTo}</a>
    )
  }
}

export default PrimaryLinks;
