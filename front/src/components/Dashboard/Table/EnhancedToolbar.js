import React from "react";
//import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


const EnhancedToolbar = (props) => {



  return (
    <Toolbar className="toolbar-me">
          <Typography variant="h6" id="tableTitle">
            Menu
            <div className="toolbar">
              <Tooltip title="Add Game">
                  <IconButton onClick={()=>props.history.push('/Dashboard/Create')} aria-label="filter list">
                      <i className="fas fa-plus"></i>
                    </IconButton>
              </Tooltip>
              <Tooltip title="Filter">
                  <IconButton aria-label="filter list">
                      <i className="fas fa-filter"></i>
                    </IconButton>
              </Tooltip>
            </div>
          </Typography>
    </Toolbar>
  );
};


export default EnhancedToolbar;