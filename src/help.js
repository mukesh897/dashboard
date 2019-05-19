import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


export default class Help extends React.Component{
  render(){
    return(
      <div>
        <Badge  badgeContent={99} color="white">
        <MailIcon />
      </Badge>
      <Badge  badgeContent={100} color="white">
        <MailIcon />
      </Badge>
      <Badge  badgeContent={1000} max={999} color="#F9FBE7">
        <MailIcon />
      </Badge>
      </div>
      /*{ <Grid container>
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

      </Grid> }*/
)
}
}
