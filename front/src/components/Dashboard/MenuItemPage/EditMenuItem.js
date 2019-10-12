import React from 'react';
import MenuItemForm from './Form/MenuItemForm'
import {setDashboardMenu} from '../../../actions/actions'
import { connect } from 'react-redux'


function AddMenuPage(props){
  const submit = (event) => {
    const newMenuItem = {name: event.name, category_id: event.category, type_id: event.type, price: event.price, served: event.served, subtype: event.subtype, ingredients: event.ingredients}
    console.log(newMenuItem)
  }
    return(
      <section className="body">
          {
            props.filteredDashboardMenu ?
              <MenuItemForm submit={submit} history={props.history}/>
            :
              <></>
          }
      </section>
    )

}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setDashboardMenu}
  )(AddMenuPage)
