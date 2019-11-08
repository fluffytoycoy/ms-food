import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../actions/actionsAuth'

function Logout (props){
    props.logout();
    return ( <Redirect to="/"/>);
}

const mapStateToProps = state =>{
  return state;
}
export default connect(
    mapStateToProps,
    {logout}
)(Logout)
