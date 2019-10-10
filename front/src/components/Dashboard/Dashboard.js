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

  setFilterMenu(menu){
    this.setState({
      filteredMenu: menu
    })
  }

  render(){
    return (
      <>
      {this.props.filteredDashboardMenu ?
          <section className="body">
            <EnhancedTableBody {...this.props} menu={this.props.filteredDashboardMenu}/>
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
