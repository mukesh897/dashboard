import React from 'react';
import logo from './logo.svg';
import './App.css';
import CentreComponent from './CentreComponent'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import Header from './header'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">

        <Grid container spacing={24}>
          <Header/>
        </Grid>

        <Grid container spacing={24}>
         <Grid item xs={2}>
           <LeftComponent/>
         </Grid>
         <Grid item xs={6}>
           <CentreComponent/>
         </Grid>
         <Grid item xs={4}>
           <RightComponent/>
         </Grid>
       </Grid>
    </div>
  );
}

export default App;
