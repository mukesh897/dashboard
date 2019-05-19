import React from 'react';
import Grid from '@material-ui/core/Grid';
import settings from './assets/settings.svg';
import Button from '@material-ui/core/Button';
import App from './App.css';




export default class AdditionalControls extends React.Component{
  render(){
    return(


      <div className="extra-top-bottom-padded" style={{color: "white"}}>
          <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              <img src={settings} className="img-padded"/>
              Settings
            </Button>
          </div>
          <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              Feedback
            </Button>
        </div>
          {/* <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              Buisness Principles
            </Button>
          </div> */}
          <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              Suggestions
          </Button>
          </div>
      </div>



    )
  }
}
