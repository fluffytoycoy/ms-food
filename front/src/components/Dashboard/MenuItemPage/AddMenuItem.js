import React from 'react';
import {setDashboardMenu} from '../../../actions/actions'
import { connect } from 'react-redux'


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
            this is the add menu item page

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
