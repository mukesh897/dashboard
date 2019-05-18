import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import Navbar from './Navbar';
import AdditionalControls from './AdditionalControls';




export default class LeftComponent extends React.Component{
  render(){
    return(
      <div>
        {/* <Logo/> */}
        <Navbar/>
        <AdditionalControls/>


      </div>


    )
  }
}
