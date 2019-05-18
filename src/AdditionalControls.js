import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';


export default class AdditionalControls extends React.Component{
  render(){
    return(


            <div>
              <div>
                <a href="http://www.google.com">
              <img src={logo} /> Control1
              </a>
            </div>
              <div
                ><a href="http://www.google.com">
                <img src={logo} /> Control2
              </a>
            </div>
              <div>
                <a href="http://www.google.com">
                <img src={logo} /> Control3
                </a>
              </div>
              <div>
                <a href="http://www.google.com">
                <img src = {logo} /> Control4
                </a>
              </div>
            </div>


    )
  }
}
