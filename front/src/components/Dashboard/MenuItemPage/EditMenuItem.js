import React from 'react';
import { FormContainer, Form, Field} from 'ui-form-field';
import Button from "@material-ui/core/Button";
import MenuItemForm from './Form/MenuItemForm'
import {setSelectedMenuItem} from '../../../actions/actions'
import { connect } from 'react-redux'


class EditMenuItem extends React.Component{
  constructor(props){
    super(props);
      this.state ={

    }
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    if(!this.props.selectedMenuItem && this.props.dashboardMenu){
      const menuItemId = Number(this.props.match.params.id);
      if(menuItemId){
        const menuItem = this.props.dashboardMenu.filter((menuItem)=>{
          return menuItem.id === menuItemId
        })[0];
        console.log(menuItem)
        if(menuItem){
          this.props.setSelectedMenuItem(menuItem)
        } else{
          this.props.history.push('/dashboard');
        }
      }else{
        this.props.history.push('/dashboard');
      }
    }
  }

  render(){
    return (
      <section className="body">
          {this.props.selectedMenuItem ?
            <MenuItemForm menuItem={this.props.selectedMenuItem} history={this.props.history}/>
            :
            <>loading</>
          }
      </section>
    );
  }
}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setSelectedMenuItem}
)(EditMenuItem)
