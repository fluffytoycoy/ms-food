import React from "react";
//import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {setDashboardMenu} from '../../../actions/actions'
import { FormContainer, Form, Field} from 'ui-form-field';
import { connect } from 'react-redux'
import FilterForm from './FilterForm';

const EnhancedToolbar = (props) => {


console.log(props)
  return (
    <Toolbar className="toolbar-me">
          <Typography variant="h1" id="tableTitle">
            Menu
          </Typography>
          <div className="toolbar">
            <Tooltip title="Add New Menu Item">
                <IconButton onClick={()=>props.history.push('/Dashboard/Create')} aria-label="filter list">
                    <i className="fas fa-plus"></i>
                  </IconButton>
            </Tooltip>
            <FilterForm/>
          </div>
    </Toolbar>
  );
};

const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setDashboardMenu}
)(EnhancedToolbar)
