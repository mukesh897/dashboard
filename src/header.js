import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';
import App from './App.css'
import Logo from './Logo'
import Help from './help'
import Search from './search'


export default class Header extends React.Component{
  render(){
    return(
      <div className = "header">
      <Grid container>
        <Grid item xs={2}>
          <Logo/>
        </Grid>

        <Grid item xs={6}>
          <Search/>
        </Grid>

        <Grid item xs={4}>
          <Help/>
        </Grid>
      </Grid>
    </div>
    )
  }
}
