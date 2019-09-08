import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuItem from './MenuItem.js'
import {menu} from './TmpData.js'
import './Menu.scss';
import Masonry from 'react-masonry-component';

  class Menu extends Component{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 1000,
        menuItemArray: [
                    this.menuItems('Starters'),
                    this.menuItems('Entrees'),
                    this.menuItems('Salads') ,
                    this.menuItems('Sides'),
                    this.menuItems('Burgers') ,
                    this.menuItems('Sandwiches'),
                    this.menuItems('Cocktails'),
                    this.menuItems('Wine'),
                    this.menuItems('Beer'),
                    this.menuItems('Kids'),
                    this.menuItems('Desserts')
                  ],
        selectedMenu: this.props.match.params.category,
      }
    }

  menuItems(category){
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

  setMenu(menu){
    this.setState({
      visableMenuItems: menu
    })
  }

  changeMenu(category){
    this.props.history.push(`/Menu/${category}`)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.match.params.category !== prevState.selectedMenu){
      return {selectedMenu: nextProps.match.params.category}
    }
    return null;
  }

  selectedMenu(menuArray){
      return menuArray.filter(menuDOM =>{
        return !this.state.selectedMenu || menuDOM.props['data-category'] === this.state.selectedMenu
      })
  }

  render(){
    console.log(this.state.selectedMenu)
    return (
      <section id= "menu" >
        <div className= "container">
          <div className= "title-bar">
            <div>
              <h3> Menu </h3>
              <div className= "sidebar">
                <p onClick={()=>{this.changeMenu('Food')}}>Food</p>
                <p onClick={()=>{this.changeMenu('Drinks')}}>Drinks</p>
                <p onClick={()=>{this.changeMenu('Desserts')}}>Desserts</p>
                <p onClick={()=>{this.changeMenu('Kids')}} >Kids</p>
              </div>
            </div>
          </div>
          <Masonry
            options={this.masonryOptions}
            className={'menu-cols'} // default ''
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false}>
              { this.selectedMenu(this.state.menuItemArray)}
          </Masonry>
        </div>
      </section>
    );
  }

}

export default Menu;
