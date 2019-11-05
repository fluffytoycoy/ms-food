import React from 'react';
import './Loading.scss'
import {connect} from 'react-redux'
import {setLoading} from '../../actions/actions'

function Loading(props){
  setTimeout(loadingFinished, 2000)

  function loadingFinished(){
    props.setLoading(true)
  }

    return (
      <section id="loading" className={`${props.loadingFinished && props.menuExists ? 'loaded' : ''}`}>
        <div>
          <img alt="mike shannons grill"src="/img/Logos/ms-grill.png"/>
          <div className="circle"></div>
        </div>
      </section>
    );
}

const mapStateToProps = state =>{
  return state.menuReducer;
}
export default connect(
    mapStateToProps,
    {setLoading}
)(Loading)
