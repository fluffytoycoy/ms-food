import React from 'react';
import {setDashboardMenu} from '../../actions/actions'
import { connect } from 'react-redux'
import EnhancedTableBody from './Table/EnhancedTableBody';
import './Dashboard.scss';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
      this.state ={

    }
  }

  render(){
    return (
      <>
      {this.props.filteredDashboardMenu ?
          <section className="body">
            <EnhancedTableBody {...this.props}/>
          </section>
        :
          <></>
      }
      </>
    );
  }
}




const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setDashboardMenu}
)(Dashboard)
