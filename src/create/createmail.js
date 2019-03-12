import React, { Component } from 'react';
import './createmail.css';
import TextField from '@material-ui/core/TextField';

class CreateMail extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="create-mail-container">
        <h1>Compose New Mail</h1>
        <div className="mail-form-inputs">
          <TextField
            id="mailRecepient"
            label="To"
            defaultValue=""
            margin="normal"
            fullWidth
          />
        </div>
        <div className="mail-form-inputs">
          <TextField
            id="mailSubject"
            label="Subject"
            defaultValue=""
            margin="normal"
            fullWidth
          />
        </div>
        <div className="mail-form-body">
          <TextField
            id="mailBody"
            label="Body"
            multiline
            rows="10"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
    )
  }
}

export default CreateMail;
