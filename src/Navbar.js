import React from 'react';
import Grid from '@material-ui/core/Grid';
import dashboard from './assets/dashboard.svg';
import creditcard from './assets/creditcard.svg';

import inven from './assets/inven.svg';

import user from './assets/user.svg';

import App from './App.css';

import Button from '@material-ui/core/Button';

export default class Navbar extends React.Component{
  render(){
    return(

      <div className="extra-top-bottom-padded" style={{color: "white"}}>
          <div className="container" align="left" >
            <Button style={{color: "white"}} color="primary" variant="outlined">
              <img src={dashboard} className="img-padded" />
              Dashboard
            </Button>
          </div>
          <div className="container" align="left" >
            <Button style={{color: "white"}} color="primary" variant="outlined">
              <img src={creditcard} className="img-padded"/> Tickets
            </Button>
        </div>
          <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              <img src={inven} className="img-padded"/> Inventory
            </Button>
          </div>
          <div className="container" align="left">
            <Button style={{color: "white"}} color="primary" variant="outlined">
              <img src = {user} className="img-padded"/> User
          </Button>
          </div>
      </div>


)
}
}
