import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo_mark.svg';
import { Progress } from 'reactstrap';

import App from './App.css'

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

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



export default class Inventory extends React.Component{



  render(){
    return(
      <div >
      <div >
        <h6 style={{color: "white"}}>Inventory overview</h6>
        <p style={{color: "white"}}>Get a bird's eye view of your inventory's activities</p>
      </div>


      <div>
        <Card color='primary'>
          <h6 align="left" color="gray" className="left-padded">Total Items in Inventory</h6>
          <h2></h2>
        {/* <Paper className="root"> */}
          <Progress multi>
            <Progress bar value="15" >Laptop</Progress>
            <Progress bar color="success" value="20" >Mouse</Progress>
            <Progress bar color="info" value="25" >Keyboard</Progress>
            <Progress bar color="warning" value="20" >Charger</Progress>
            <Progress bar color="danger" value="15" >Display</Progress>
          </Progress>

      <Table className="table all-side-padded" >
        <TableHead>


          <TableRow>
            <CustomTableCell >Item Id</CustomTableCell>
            <CustomTableCell >Name</CustomTableCell>
            <CustomTableCell >Quantity</CustomTableCell>
            <CustomTableCell >Type</CustomTableCell>
            <CustomTableCell> Days</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className="row" key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.itemid}
              </CustomTableCell>
              <CustomTableCell >{row.name}</CustomTableCell>
              <CustomTableCell >{row.quantity}</CustomTableCell>
              <CustomTableCell >{row.type}</CustomTableCell>
              <CustomTableCell >{row.time}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    {/* </Paper> */}
  </Card>
      </div>


    </div>
)
}
}

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(itemid, name, quantity, type, time) {
  id += 1;
  return { id, itemid, name, quantity, type, time,  };
}

const rows = [
  createData('GGSKSIE', 'DELL INSPIRON', 6, 'LAPTOP', 4),
  createData('KSJSOSK', 'ACER ASPIRE', 9, 'KEYBOARD', 4),
  createData('EKSKWM9', 'APPLE MACBOOK_PRO',5, 'CHARGER', 6),
  createData('HSJ3627', 'APPLE MACBOOK_AIR', 3, 'LAPTOP', 4),
  createData('H27EH82', 'HP PAVILLION', 6, 'LAPTOP', 3),
];

function CustomizedTable(props) {
  const { classes } = props;
}
