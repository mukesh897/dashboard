import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';


export default class Search extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item xs>
          <div align = "right">
            <img src={logo}/>
          </div>
        </Grid>
        <Grid item xs>
          <div alighn = "left">
            Better

          </div>
        </Grid>

      </Grid>
)
}
}
