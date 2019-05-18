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

      <div className="extra-top-bottom-padded">
          <div className="container" align="left">
            <Button color="primary" variant="outlined">
              <img src={dashboard} />
              Dashboard
            </Button>
          </div>
          <div className="container" align="left">
            <Button color="primary" variant="outlined">
              <img src={creditcard} /> Tickets
            </Button>
        </div>
          <div className="container" align="left">
            <Button color="primary" variant="outlined">
              <img src={inven} /> Inventory
            </Button>
          </div>
          <div className="container" align="left">
            <Button color="primary" variant="outlined">
              <img src = {user} /> User
          </Button>
          </div>
      </div>


)
}
}
