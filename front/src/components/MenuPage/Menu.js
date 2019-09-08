import React from 'react';
import {Link} from 'react-router-dom';
import {menu} from './TmpData.js'
import './Menu.scss';

function Menu(props) {

  const menuItems = (category) => {
    const index = menu.findIndex(menu => menu.title === category);
    if(index >= 0){
      const products = menu[index].products.map(item => {
        return (
          <div>
            <h6>{item.name} {item.price} </h6>
            <p>{item.ingredients} </p>
          </div>
        )
      })
      return (
         <>
         <h4 >{category}</h4>
         {products}
        </>
      )
    }
    return null
  }

  return (
    <section id = "menu" >
      <div className = "container">
        <div className = "title-bar">
          <div>
            <h3> Menu </h3>
            <div className = "sidebar" >
              <a href = "">Food</a>
              <a href = "">Drink</a>
              <a href = "">Dessert</a>
              <a href = "">Kids</a>
              </div>
            </div>
        </div>
        <div className = "menu-cols" >
          <div className = "col-3" >
            { menuItems('Cocktails') }
            { menuItems('Wine') }
          </div>
          <div class = "col-3" >
            { menuItems('Entrees') }
            { menuItems('Sides') }
          </div>
          <div className = "col-3" >
            { menuItems('Burgers') }
            { menuItems('Sandwiches') }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
