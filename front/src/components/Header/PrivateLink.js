import React from 'react';
import { connect } from 'react-redux'

const PrivateLink = ({ component: Component, ...rest}) => {

    function isLoggedIn(){
      return rest.isLoggedIn;
    }

    return (
            <>{isLoggedIn() ? <Component {...rest} /> : <></>}</>
    )
}

const mapStateToProps = state =>{
  return { ...state.authReducer};
}

export default connect(
    mapStateToProps,
)(PrivateLink)
