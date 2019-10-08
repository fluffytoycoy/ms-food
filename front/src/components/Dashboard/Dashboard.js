import React from 'react';
import { connect } from 'react-redux'
//import './Dashboard.scss';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
      this.state ={

    }
  }

  render(){
    console.log(this.props)
    return (
      <section className="body">
        <h1>this is the dashboard</h1>
      </section>
    );
  }
}




const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps
)(Dashboard)
