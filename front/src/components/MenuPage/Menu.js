import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuItem from './MenuItem.js'
import {menu} from './TmpData.js'
import './Menu.scss';
import Masonry from 'react-masonry-component';

function Menu(props) {
  const masonryOptions = {
    transitionDuration: 1000
  };
  const menuItems = (category) => {
    const menuIndex = menu.findIndex(menu => menu.title === category);
    if(menuIndex >= 0){
      const products = menu[menuIndex].products.map((item, index) => {
        return (
          <MenuItem item={item} data-category={menu[menuIndex].category}key={index}/>
        )
      })
      return (
        <div className="category-col" key={category} data-category={products[0].props['data-category']}>
           <h4 >{category}</h4>
           {products}
        </div>
      )
    }
    return null
  }
  const menuArr = [
              menuItems('Starters'),
              menuItems('Entrees'),
              menuItems('Sides'),
              menuItems('Burgers') ,
              menuItems('Sandwiches'),
              menuItems('Salads') ,
              menuItems('Cocktails'),
              menuItems('Wine'),
              menuItems('Beer'),
            ]
  const [menuSections, setMenu] = useState(menuArr);
  const [selectedMenu, setSelectedMenu] = useState('')

  console.log(props.match.params)

  const changeMenu = (category) =>{
    const newMenu = menuArr.filter(menuDOM =>{
      return menuDOM.props['data-category'] === category
    })
    props.history.push(category)
    setMenu(newMenu)
  }
  return (
    <section id= "menu" >
      <div className= "container">
        <div className= "title-bar">
          <div>
            <h3> Menu </h3>
            <div className= "sidebar">
              <p onClick={()=>{changeMenu('Food')}}>Food</p>
              <p onClick={()=>{changeMenu('Drinks')}}>Drink</p>
              <p href="" href="Menu/Dessert">Dessert</p>
              <p href="" href="Menu/Kids">Kids</p>
            </div>
          </div>
        </div>
        <Masonry
          options={masonryOptions}
          className={'menu-cols'} // default ''
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false}>
            { menuSections }
        </Masonry>
      </div>
    </section>
  );
}

export default Menu;
