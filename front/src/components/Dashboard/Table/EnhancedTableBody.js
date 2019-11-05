import React from 'react';
//import PropTypes from "prop-types";
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedToolbar from './EnhancedToolbar';
import DeleteDialog from '.././DeleteDialog/DeleteDialog';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import {setSelectedMenuItem} from '../../../actions/actions';
import {setPreviousPage} from '../../../actions/actions';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function desc(a, b, orderBy) {
  if (b[orderBy] === null || b[orderBy] < a[orderBy]) {
    return -1;
  }
  if ( a[orderBy] === null || b[orderBy] > a[orderBy] ) {
    return 1;
  }
  return 0;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: '20px'
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

function EnhancedTableBody(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [menuItem, setMenuItem] = React.useState();
  const [menuOpen, toggleMenuOpen] = React.useState(false);

  let menu = props.filteredDashboardMenu;
  const page = getSelectedPage(props.match.params.pageNumber);


  function getSelectedPage(number){
    let pageNumber = parseInt(number);
    let maxPages = getMaxPages();
    if(pageNumber <= 0 || !pageNumber){
      pageNumber = 1;
    } else if(number > maxPages){
      pageNumber = getMaxPages();
    }
    return pageNumber -1;

    function getMaxPages(){
      return Math.ceil(menu.length / rowsPerPage);
    }
  }

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    console.log(newPage)
    props.history.push(`/Dashboard/Page/${newPage+1}/${props.match.params.filter ? props.match.params.filter : ''}`)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    props.history.push(`/Dashboard/Page/1`)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, menu.length - page * rowsPerPage);

  function editMenuItem(menuItem){
    props.setSelectedMenuItem(menuItem)
    props.setPreviousPage(props.history.location.pathname);
    props.history.push(`/Dashboard/Edit/${menuItem.id}`)
  }

  function deleteMenuItem(item){
    setMenuItem(item);
    toggleMenuOpen(true);
  }

  return (
    <div className={classes.root}>
        <EnhancedToolbar {...props} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={menu.length}
            />
            <TableBody>
              {stableSort(menu, getSorting(order, orderBy))
                .slice(page  * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell align="left" className="dashboard-name">{row.name}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">{row.type}</TableCell>
                      <TableCell align="left" className="dashboard-ingredients">{row.ingredients}</TableCell>
                      <TableCell  align="center">
                        <div className="button-row">
                          <Button onClick={()=>{editMenuItem(row)}} variant="outlined" className='edit-btn'>EDIT</Button>
                          <Button onClick={()=>{deleteMenuItem(row)}} variant="outlined" className='delete-btn'>DELETE</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 15, 25]}
          component="div"
          count={menu.length}
          rowsPerPage={rowsPerPage}
          page={(page)}
          backIconButtonProps={{"aria-label": "previous page"}}
          nextIconButtonProps={{"aria-label": "next page"}}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <DeleteDialog menuItem={menuItem} open={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
    </div>
  );
}

const mapStateToProps = state =>{
  return state.menuReducer;
}

export default connect(
    mapStateToProps,
    {setPreviousPage, setSelectedMenuItem}
)(EnhancedTableBody)
