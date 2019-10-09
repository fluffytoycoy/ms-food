import React from 'react';
import { connect } from 'react-redux'
import EnhancedTableBody from './Table/EnhancedToolbar';
//import './Dashboard.scss';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
      this.state ={

    }
  }

  render(){
    return (
      <section className="body">
        <EnhancedTableBody menu={[{name: 'test'}]}/>
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
