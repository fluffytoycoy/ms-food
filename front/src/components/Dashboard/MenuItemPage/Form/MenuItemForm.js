import React from 'react';
import { FormContainer, Form, Field} from 'ui-form-field';
import Button from "@material-ui/core/Button";
import {setSelectedMenuItem} from '../../../../actions/actions'
import { connect } from 'react-redux'


function MenuItemForm(props){

  const getSelectOptions = (property) => {
    const keys = Object.entries(props[property]);
    let options = [];
    for (const [name, id] of keys) {
      options.push({value: id, label: name})
    }
    return options;
  }

  const cancel =()=>{
    props.history.goBack();
  }

  const gameForm = () =>{
    const categoryOptions = [{value: '', label: 'Select a category'}, ...getSelectOptions('categories')]
    const typeOptions = [{value: '', label: 'Select a type'}, ...getSelectOptions('types')]
    return(
      <Form>
        <Field required  name='name'/>
        <Field required select  options={categoryOptions} name='category'/>
        <Field required select options={typeOptions} name="type"/>
        <Field name="price"/>
        <Field name="served"/>
        <Field name="subtype"/>
        <Field name="ingredients"/>
        <div className='btn-bar'>
          <Button variant="contained" className='cancel'onClick={()=>{cancel()}}>Cancel</Button>
          <Button variant="contained" color="primary" className='submit' type="submit">SAVE</Button>
        </div>
      </Form>
      )
  }

  const submit = (event)=> {
    const newMenuItem = {name: event.name, category_id: event.category, type_id: event.type, price: event.price, served: event.served, subtype: event.subtype, ingredients: event.ingredients}
    console.log(newMenuItem)
  }

  const initialValues = () => {
    if(props.menuItem){
      const {name, category_id, type_id, price, served, subtype, ingredients} = props.menuItem;
      return {name: name ? name : '', category: category_id, type: type_id, price: price ? price : '', served: served ? served : '', subtype: subtype ? subtype : '' ,ingredients: ingredients ? ingredients : ''}
    }
    return {name: '', category_id: '', type_id: '', price: '', served: '', subtype: '',ingredients: ''}
  }

  return(
    <section id="game-page">
      <div>
        <div className="col">
          <FormContainer
            initialValues={initialValues()}
            onSubmit={submit}
            render={gameForm}/>
        </div>
      </div>
    </section>
  )

}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setSelectedMenuItem}
  )(MenuItemForm)
