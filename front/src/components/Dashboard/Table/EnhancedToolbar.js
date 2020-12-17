import React from "react";
//import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {setDashboardMenu} from '../../../actions/actions'
import { connect } from 'react-redux'
import {setPreviousPage} from '../../../actions/actions';
import FilterForm from './FilterForm';

const EnhancedToolbar = (props) => {

  function addMenuItem(){
    props.setPreviousPage(props.history.location.pathname);
    props.history.push('/Dashboard/Create');
  }

  return (
    <Toolbar className="toolbar-me">
          <Typography variant="h1" id="tableTitle">
            Menu
          </Typography>
          <div className="toolbar">
            <Tooltip title="Add New Menu Item">
                <IconButton onClick={addMenuItem} aria-label="filter list">
                    <i className="fas fa-plus" samesite="None" secure="true"></i>
                  </IconButton>
            </Tooltip>
            <FilterForm/>
          </div>
    </Toolbar>
  );
};

const mapStateToProps = state =>{
  return state.menuReducer;
}

export default connect(
    mapStateToProps,
    {setDashboardMenu, setPreviousPage}
)(EnhancedToolbar)
