import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';
import App from './App.css'


export default class Logo extends React.Component{
  render(){
    return(
      <div className="text-vertical-center" style={{color: "white"}} >
        <img src={logo}/>
        Better
      </div>
    )
  }
}
