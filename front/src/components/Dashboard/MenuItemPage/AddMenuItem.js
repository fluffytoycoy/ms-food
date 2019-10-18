import React, {Component} from 'react';
import MenuItemForm from './Form/MenuItemForm'
import MenuItemPageHOC from './MenuItemPageHoc'
import MenuItemDisplay from './MenuItemDisplay'
import {addMenuItem} from '../../../actions/actions'
import { connect } from 'react-redux'
import { getStringifiedKeyFromValue } from '../../Utils/MapFunctions/MapFunctions'


class AddMenuPage extends Component{
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
    this.setState({
      menuItemDisplay: {
        name: '',
        type: 'Type',
        price: '',
        served: '',
        subtype: '',
        ingredients: '',
      }
    })
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
      name: event.name,
      category_id: Number(event.category),
      type_id: Number(event.type),
      price: event.price,
      served: event.served,
      subType: event.subtype,
      ingredients: event.ingredients,
      category: getStringifiedKeyFromValue(this.props.categories, event.category),
      type: getStringifiedKeyFromValue(this.props.types, event.type),
    }
    this.props.addMenuItem(newMenuItem)
  }

  componentDidUpdate(){
    if(this.props.error === 'it worked'){
    }
  }

  render(){
    return(
      <section className="body">
        <div className="menu-item-wrapper">
          <div className="menu-item-row">
                <MenuItemForm submit={this.submit} formChange={this.formChange} history={this.props.history}/>
                <MenuItemDisplay menuItemDisplay={this.state.menuItemDisplay}/>
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
    {addMenuItem}
  )(MenuItemPageHOC(AddMenuPage))
