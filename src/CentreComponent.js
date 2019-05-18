

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './search';
import Info from './info';
import Inventory from './inventory';




export default class LeftComponent extends React.Component{
  render(){
    return(
      <div>
        {/* <Search/> */}
        <Info/>
        <Inventory/>


      </div>


    )
  }
}
