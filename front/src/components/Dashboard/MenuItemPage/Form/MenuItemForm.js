import React, {useState} from 'react';
import { FormContainer, Form, Field} from 'ui-form-field';
import Button from "@material-ui/core/Button";
import {setSelectedMenuItem} from '../../../../actions/actions'
import { connect } from 'react-redux'


function MenuItemForm(props){
  const [name, setName] = useState(props.selectedMenuItem ? props.selectedMenuItem.name : '')
  const [type, setType] = useState(props.selectedMenuItem ? props.selectedMenuItem.type : '')
  const [price, setPrice] = useState(props.selectedMenuItem ? props.selectedMenuItem.price : '')
  const [served, setServed] = useState(props.selectedMenuItem ? props.selectedMenuItem.served : '')
  const [subtype, setSubtype] = useState(props.selectedMenuItem ? props.selectedMenuItem.subtype : '')
  const [ingredients, setIngredients] = useState(props.selectedMenuItem ? props.selectedMenuItem.ingredients : '')

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
    switch(event.target.name){
      case 'type':
        const typeOptions = props['types'];
        setType(getStringifiedKeyFromValue(typeOptions, event.target.value));
        break;
      case 'name':
        setName(event.target.value);
        break;
      case 'price':
        setPrice(event.target.value);
        break;
      case 'served':
        setServed(event.target.value);
        break;
      case 'subtype':
        setSubtype(event.target.value);
        break;
      case 'ingredients':
        setIngredients(event.target.value)
        break;
      default:
        break;
    }

    function getStringifiedKeyFromValue(object, value){
      return Object.keys(object).filter(key => object[key] == value)[0];
    }
  }

  const gameForm = () =>{
    const categoryOptions = [{value: '', label: 'Select a category'}, ...getSelectOptions('categories')]
    const typeOptions = [{value: '', label: 'Select a type'}, ...getSelectOptions('types')]
    return(
      <div>
        <Form onChange={formchange}>
          <Field required  name='name'/>
          <Field required select  options={categoryOptions} name='category'/>
          <Field required select options={typeOptions} name="type"/>
          <Field  name="price"/>
          <Field name="served"/>
          <Field name="subtype"/>
          <Field name="ingredients"/>
          <div className='btn-bar'>
            <Button variant="contained" className='cancel'onClick={()=>{cancel()}}>Cancel</Button>
            <Button variant="contained" color="primary" className='submit' type="submit">SAVE</Button>
          </div>
        </Form>
        <div class="menu-cols" data-category="Drinks">
          <h4>{type}</h4>
          <div data-category="Drinks">
            <h6>{name} {price}</h6>
            {served ? <p>{served}</p> : <></>}
            {ingredients ? <p>{ingredients}</p> : <></>}
          </div>
        </div>
      </div>
    )
  }

  function initialValues(){
    let menuItem = {};
    if(props.selectedMenuItem){
      const {name, category_id, type_id, price, served, subtype, ingredients} = props.selectedMenuItem;
      menuItem = {name: name ? name : '', category: category_id, type: type_id, price: price ? price : '', served: served ? served : '', subtype: subtype ? subtype : '' ,ingredients: ingredients ? ingredients : ''}
      console.log(menuItem)
      return menuItem
    }else{
      return {name: '', category_id: '', type_id: '', price: '', served: '', subtype: '',ingredients: ''}
    }

  }

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
