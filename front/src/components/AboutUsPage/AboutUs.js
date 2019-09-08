import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';

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

export default AboutUs;
