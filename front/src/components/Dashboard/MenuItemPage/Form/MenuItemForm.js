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

  const formchange =(event)=>{
    console.log(event.target.name)
    console.log(event.target)
  }

  const gameForm = () =>{
    const categoryOptions = [{value: '', label: 'Select a category'}, ...getSelectOptions('categories')]
    const typeOptions = [{value: '', label: 'Select a type'}, ...getSelectOptions('types')]
    return(
<div>      <Form onChange={formchange}>
        <Field required  name='name'/>
        <Field required select  options={categoryOptions} name='category'/>
        <Field required select options={typeOptions} name="type"/>
        <Field onKeyUp={formchange} name="price"/>
        <Field name="served"/>
        <Field name="subtype"/>
        <Field name="ingredients"/>
        <div className='btn-bar'>
          <Button variant="contained" className='cancel'onClick={()=>{cancel()}}>Cancel</Button>
          <Button variant="contained" color="primary" className='submit' type="submit">SAVE</Button>
        </div>
      </Form>
      <div class="menu-cols" data-category="Drinks">
        <h4>Cocktails</h4>
        <div data-category="Drinks">
        <h6>Bloody Mary $8 </h6>
        <p>-Served Tall in Soda Glass-</p>
        <p>Ménage à Trois Vodka, Tres Agaves Bloody Mary Mix, Dash Mike Shannon's Steak Sauce, Salt</p>
        </div>
        </div></div>
      )
  }



  const initialValues = () => {
    if(props.menuItem){
      const {name, category_id, type_id, price, served, subtype, ingredients} = props.menuItem;
      return {name: name ? name : '', category: category_id, type: type_id, price: price ? price : '', served: served ? served : '', subtype: subtype ? subtype : '' ,ingredients: ingredients ? ingredients : ''}
    }
    return {name: '', category_id: '', type_id: '', price: '', served: '', subtype: '',ingredients: ''}
  }
  console.log(props)
  return(
    <section id="game-page">
      <div>
        <div className="col">
          <FormContainer
            initialValues={initialValues()}
            onSubmit={props.submit}
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
