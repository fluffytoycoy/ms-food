import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import TheVenue from './Sections/TheVenue';
import Art from './Sections/Art';
import Mike from './Sections/Mike';

import "./AboutUs.scss";
  class AboutUs extends Component{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 1000,

        selectedMenu: this.props.match.params.category,
      }
    }

  changeMenu(category){
    this.props.history.push(category)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    // if(nextProps.match.params.category !== prevState.selectedMenu){
    //   return {selectedMenu: nextProps.match.params.category}
    // }
    return null;
  }

  selectedMenu(menuArray){
      // return menuArray.filter(menuDOM =>{
      //   return !this.state.selectedMenu || menuDOM.props['data-category'] === this.state.selectedMenu
      // })
  }

  aboutItems(category){
    // const menuIndex = menu.findIndex(menu => menu.title === category);
    // if(menuIndex >= 0){
    //   const products = menu[menuIndex].products.map((item, index) => {
    //     return (
    //       <MenuItem item={item} data-category={menu[menuIndex].category}key={index}/>
    //     )
    //   })
    //   return (
    //     <div className="category-col" key={category} data-category={products[0].props['data-category']}>
    //        <h4 >{category}</h4>
    //        {products}
    //     </div>
    //   )
    // }
    // return null
  }

  render(){
    console.log(this.state.selectedMenu)
    return (
      <section id= "menu" >
        <div className= "container">
          <div className= "title-bar">
            <div>
              <h3> About Us </h3>
              <div className= "sidebar">
                <p onClick={()=>{this.changeMenu('The-Venue')}}>The Venue</p>
                <p onClick={()=>{this.changeMenu('Art')}}>Art</p>
                <p onClick={()=>{this.changeMenu('Mike')}}>Mike</p>
              </div>
            </div>
          </div>
          <Masonry
            options={this.masonryOptions}
            className={'about-row'}
            updateOnEachImageLoad={false}>
            <>
              <TheVenue/>
              <Mike/>
              <Art/>
            </>
          </Masonry>
        </div>
      </section>
    );
  }

}

export default AboutUs;
