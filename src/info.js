import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';


export default class Info extends React.Component{
  render(){
    return(
      <div>
        <div>
          <a href="http://www.google.com">
        <img src={logo} /> Link1
        </a>
      </div>
        <div
          ><a href="http://www.google.com">
          <img src={logo} /> Link2
        </a>
      </div>
        <div>
          <a href="http://www.google.com">
          <img src={logo} /> Link3
          </a>
        </div>
        <div>
          <a href="http://www.google.com">
          <img src = {logo} /> Link4
          </a>
        </div>
      </div>
)
}
}
