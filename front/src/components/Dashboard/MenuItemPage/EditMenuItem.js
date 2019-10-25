import React, {Component} from 'react';
import MenuItemForm from './Form/MenuItemForm'
import MenuItemPageHOC from './MenuItemPageHoc'
import MenuItemDisplay from './MenuItemDisplay'
import {setSelectedMenuItem} from '../../../actions/actions'
import { updateMenuItem } from '../../../actions/actions'
import { connect } from 'react-redux'
import { getStringifiedKeyFromValue } from '../../Utils/MapFunctions/MapFunctions'


class EditMenuPage extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.submit = this.submit.bind(this)
    this.formChange = this.formChange.bind(this)
  }

  componentDidMount(){
    //
    // checks that id is a number or exists
    // checks that menuItem exists with selected id
    // sets selectedMenuItem one does not already exist
    // routes back to dashboard on error
    //
    try{
      const menuItemId = Number(this.props.match.params.id)
      if(!menuItemId){
        throw new Error('incorrect id');
      }else if(this.props.selectedMenuItem){
        const menuItem = findMenuItemById(this.props.filteredDashboardMenu, menuItemId);
        setMenuItem(this, menuItem);
      }else{
        const menuItem = findMenuItemById(this.props.filteredDashboardMenu, menuItemId);
        setMenuItem(this, menuItem);
      }
    } catch (e){
      this.props.history.push('/Dashboard')
    }

    function findMenuItemById(menuList, menuItemId){
      return menuList.filter(menuItem =>{
        return menuItem.id === menuItemId
      })[0];
    }

    function setMenuItem(component, menuItem) {
      if (menuItem) {
        component.props.setSelectedMenuItem(menuItem);
        component.setState({
          menuItemDisplay: {
            name: menuItem.name,
            type: menuItem.type,
            price: menuItem.price,
            served: menuItem.served,
            subtype: menuItem.subType,
            ingredients: menuItem.ingredients,
          }
        })
      } else {
        throw new Error('invalid Id');
      }
    }
  }

  formChange(event){
    switch(event.target.name){
        case 'type':
          const typeOptions = this.props['types'];
          this.setState({
            menuItemDisplay: {
              ...this.state.menuItemDisplay,
              [event.target.name]: getStringifiedKeyFromValue(typeOptions, event.target.value),

            }
          });
          break;
        default:
          this.setState({
            menuItemDisplay: {
              ...this.state.menuItemDisplay,
            [event.target.name]: event.target.value,
          }
          })
    }
  }

  submit(event){
    const newMenuItem = {
      id: this.props.selectedMenuItem.id,
      name: event.name,
      category_id: event.category,
      type_id: event.type,
      price: event.price,
      served: event.served,
      subtype: event.subtype,
      ingredients: event.ingredients,
      category: getStringifiedKeyFromValue(this.props.categories, event.category),
      type: getStringifiedKeyFromValue(this.props.types, event.type),
    }
    this.props.updateMenuItem(newMenuItem);
    this.goBack();
  }

  goBack(){
    if(this.props.prevPage){
      this.props.history.goBack();
    }else{
      this.props.history.push('/Dashboard')
    }
  }

  render(){
    return(
      <section className="body">
        <div className="menu-item-wrapper">
          <div className="menu-item-row">
            {
              this.props.selectedMenuItem ?
              <>
                <MenuItemForm submit={this.submit} formChange={this.formChange}
                edit history={this.props.history}/>
                <MenuItemDisplay menuItemDisplay={this.state.menuItemDisplay}/>
              </>
              :
              <></>
            }
          </div>
        </div>
      </section>
    )
  }

}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setSelectedMenuItem, updateMenuItem}
  )(MenuItemPageHOC(EditMenuPage))
