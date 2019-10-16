import React, {Component} from 'react';
import MenuItemForm from './Form/MenuItemForm'
import MenuItemPageHOC from './MenuItemPageHoc'
import {setSelectedMenuItem} from '../../../actions/actions'
import { connect } from 'react-redux'


class EditMenuPage extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount(){
    const menuItemId = Number(this.props.match.params.id)
    if(!menuItemId){
      this.props.history.push('/Dashboard')
    }else if(this.props.selectedMenuItem){
      if(this.props.selectedMenuItem.id !== menuItemId){
        const menuItem = this.props.filteredDashboardMenu.filter(menuItem =>{
          return menuItem.id === menuItemId
        })[0];
        this.props.setSelectedMenuItem(menuItem);
      }
    }else{
      const menuItem = this.props.filteredDashboardMenu.filter(menuItem =>{
        return menuItem.id === menuItemId
      })[0];
      if(menuItem){
        this.props.setSelectedMenuItem(menuItem);
      }else{
        this.props.history.push('/Dashboard')
      }
    }

    //this.props.setSelectedMenuItem()
  }

  submit(event){
    const newMenuItem = {name: event.name, category_id: event.category, type_id: event.type, price: event.price, served: event.served, subtype: event.subtype, ingredients: event.ingredients}
    console.log(newMenuItem)
  }

  render(){
    return(
      <section className="body">
      {
        this.props.selectedMenuItem ?
        <MenuItemForm submit={this.submit} history={this.props.history}/>
        :
        <></>
      }
      </section>
    )
  }

}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setSelectedMenuItem}
  )(MenuItemPageHOC(EditMenuPage))
