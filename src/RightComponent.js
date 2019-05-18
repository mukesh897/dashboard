

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Help from './help';
import Trends from './trends';
import Tickets from './tickets';

import App from './App.css'



export default class LeftComponent extends React.Component{
  render(){
    return(
      <div>
        {/* <Help/> */}
        <Trends/>
        <Tickets/>


      </div>


    )
  }
}
