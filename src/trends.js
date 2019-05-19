import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import App from './App.css';


export default class Trends extends React.Component{
  render() {
         const data = [
             {
                 color: "green",
                 points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
             }
         ];
         return (
             <div className="bottom-padded">
               <Card className="bottom-padded right-padded">
                 <div className="App" >
                     <h5 align="left" color="gray" className="left-padded">Ticket Trends</h5>
                     <LineChart
                         width={300}
                         height={200}
                         data={data}
                         align="left"
                     />

                 </div>
               </Card>
             </div>
         );
     }
   }
