import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';



import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';



export default class Info extends React.Component{
  render(){
    return(
      <div>
        <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe">
              R
            </Avatar>
          }
          action={
            <Badge badgeContent color="primary">
              <Fab variant="extended" aria-label="Delete">
                <NavigationIcon />
                3 days to go
              </Fab>
            </Badge>
          }
          title=<h2>Anniversary celebrations</h2>
          subheader=<div>Being the savage's bowsman,
          that is, the person who pulled the bow-oar in his boat
          (the second one from forward), it was my cheerful
          duty to attend upon him while taking that hard- scrabble scramble
          upon the dead whale's back.
          You have seen Italian organ-boys holding a dancing-ape by a long cord.
          <a href="/">Learn more</a></div>
        />
      </Card>
      </div>
)
}
}
