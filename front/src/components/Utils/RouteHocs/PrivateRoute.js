import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component,  ...rest }) => {

    function isLoggedIn(){
      return rest.isLoggedIn;
    }

    return (
        <Route
            {...rest}
            render={props => isLoggedIn() ? <Component {...rest} {...props}/> : <Redirect to="/login" />}
        />
    )
}

const mapStateToProps = state =>{
  return { ...state.authReducer};
}

export default connect(
    mapStateToProps,
)(PrivateRoute)
