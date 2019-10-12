import React from 'react';
import MenuItemForm from './Form/MenuItemForm'
import {setDashboardMenu} from '../../../actions/actions'
import { connect } from 'react-redux'


class AddMenuPage extends React.Component{
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
            <MenuItemForm />

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
  )(AddMenuPage)
