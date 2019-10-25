import React from 'react';
import { FormContainer, Form, Field} from 'ui-form-field';
import Button from "@material-ui/core/Button";
import './MenuItemForm.scss'
import { connect } from 'react-redux'


function MenuItemForm(props){

  const getSelectOptions = (property) => {
    const keys = Object.entries(props[property]);
    let options = [];
    keys.forEach(key=>{
      options.push({value: key[1], label: key[0]})
    })
    return options;
  }

  const initialValues = () => {
    let menuItem = {};
    if(props.edit && props.selectedMenuItem){
      const {name, category_id, type_id, price, served, subType, ingredients} = props.selectedMenuItem;
      menuItem = {name: name ? name : '', category: category_id, type: type_id, price: price ? price : '', served: served ? served : '', subtype: subType ? subType : '' ,ingredients: ingredients ? ingredients : ''}
      return menuItem
    }else{
      return {name: '', category_id: '', type_id: '', price: '', served: '', subtype: '',ingredients: ''}
    }

  }

  const cancel = () =>{
    if(props.prevPage){
      props.history.goBack();
    }else{
      props.history.push('/Dashboard')
    }
  }

  const gameForm = () =>{
    const categoryOptions = [{value: '', label: 'Select a category'}, ...getSelectOptions('categories')]
    const typeOptions = [{value: '', label: 'Select a type'}, ...getSelectOptions('types')]
    return(
        <Form className="form" onChange={props.formChange}>
          <div className="form-wrapper">
            <Field required  name='name'/>
            <Field required select  options={categoryOptions} name='category'/>
            <Field required select options={typeOptions} name="type"/>
            <Field  name="price"/>
            <Field name="served"/>
            <Field name="subtype"/>
            <Field className="textarea" textarea name="ingredients"/>
            <div className='btn-bar'>
              <Button variant="contained" className='cancel'onClick={()=>{cancel()}}>Cancel</Button>
              <Button variant="contained" color="primary" className='submit' type="submit">SAVE</Button>
            </div>
          </div>
        </Form>
    )
  }

  return(
        <div className="col">
          <FormContainer
            initialValues={initialValues()}
            onSubmit={props.submit}
            render={gameForm}/>
        </div>
  )
}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
  )(MenuItemForm)
