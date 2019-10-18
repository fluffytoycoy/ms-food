import React, {Component} from 'react';
import MenuItemForm from './Form/MenuItemForm'
import MenuItemPageHOC from './MenuItemPageHoc'
import MenuItemDisplay from './MenuItemDisplay'
import {addMenuItem} from '../../../actions/actions'
import { connect } from 'react-redux'


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
    function getStringifiedKeyFromValue(object, value){
      return Object.keys(object).filter(key => object[key] == value)[0];
    }
  }

  submit(event){
    const newMenuItem = {name: event.name, category_id: event.category, type_id: event.type, price: event.price, served: event.served, subtype: event.subtype, ingredients: event.ingredients}
    const test = this.props.addMenuItem(newMenuItem)
  }

  componentDidUpdate(){
    if(this.props.error === 'it worked'){
      this.props.history.goBack();
    }
  }

  checkSubmitStatus(){

  }

  render(){
    this.checkSubmitStatus();
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
