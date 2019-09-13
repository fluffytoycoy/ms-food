import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuItem from './MenuItem.js'
import {menu} from './TmpData.js'
import './Menu.scss';
import Masonry from 'react-masonry-component';
import TabPage from '../Templates/TabPage';
import { connect } from 'react-redux'

  class Menu extends TabPage{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 1000,
        menuItemArray: [

                  ],
        avalibleSections: [
                            'Food',
                            'Drinks',
                            'Kids',
                            'Desserts'
                          ],
        selectedMenu: this.props.match.params.category,
      }
    }
  testing(){
    const menuCategories = Object.keys(this.props.menu);
    const categorizedMenuItems = menuCategories.map((category)=>{
      return this.props.menu[category]
    })
    console.log(categorizedMenuItems)
  }
  menuItems(category){
    //const newMenu = Object.keys(this.props.menu);
    const menuCategories = Object.keys(this.props.menu);
    console.log(menuCategories)
    const menuIndex = menu.findIndex(menu => menu.type === category);
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

  changeMenu(category){
    this.props.history.push(`/Menu/${category}`)
  }

  render(){
    if(this.props.menuExists){
      this.testing();
    }
    return (
      <>
        { this.props.menuExists ?
        <section id="menu" className="body">
          <div className= "container">
            <div className= "title-bar">
              <div>
                <h3> Menu </h3>
                <div className= "sidebar">
                  <p className={`${this.state.selectedMenu === undefined ? 'selected' : ''}`} onClick={()=>{this.changeMenu('')}}>All</p>
                  <p className={`${this.state.selectedMenu === 'Food' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Food')}}>Food</p>
                  <p className={`${this.state.selectedMenu === 'Drinks' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Drinks')}}>Drinks</p>
                  <p className={`${this.state.selectedMenu === 'Desserts' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Desserts')}}>Desserts</p>
                  <p className={`${this.state.selectedMenu === 'Kids' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Kids')}} >Kids</p>
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
        : ''}
      </>
    );
  }

}

const mapStateToProps = state =>{
  return state;
}
export default connect(
    mapStateToProps
)(Menu)
