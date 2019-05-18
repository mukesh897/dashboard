import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';
import App from './App.css'


export default class Logo extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item xs>
          <div  >
            <img src={logo}/>
          </div>
        </Grid>
        <Grid item xs>
          <div align="left">
            Better

          </div>
        </Grid>

      </Grid>
    )
  }
}
