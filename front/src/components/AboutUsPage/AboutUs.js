import React from 'react';
import Masonry from 'react-masonry-component';
import TheVenue from './Sections/TheVenue';
import Justin from './Sections/Justin';
import Mike from './Sections/Mike';
import TabPage from '../Templates/TabPage';

import "./AboutUs.scss";
  class AboutUs extends TabPage{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 1000,
        menuArray: [ <TheVenue key='venue' data-category="The-Venue"/>, <Mike key='mike' data-category="Mike"/>, <Justin key='justin' data-category="Justin"/>],
        selectedMenu: this.props.match.params.category,
        avalibleSections: ["The-Venue", "Mike", "Justin"]
      }
    }

  changeMenu(category){
    this.props.history.push(`/About-Us/${category}`)
  }

  render(){
    return (
      <section id= "menu" className="body">
        <div className= "container">
          <div className= "title-bar">
            <div>
              <h3> About Us </h3>
              <div className= "sidebar">
                <p className={`${this.state.selectedMenu === undefined ? 'selected' : ''}`} onClick={()=>{this.changeMenu('')}}>All</p>
                <p className={`${this.state.selectedMenu === 'The-Venue' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('The-Venue')}}>The Venue</p>
                <p className={`${this.state.selectedMenu === 'Justin' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Justin')}}>Justin</p>
                <p className={`${this.state.selectedMenu === 'Mike' ? 'selected' : ''}`} onClick={()=>{this.changeMenu('Mike')}}>Mike</p>
              </div>
            </div>
          </div>
          <Masonry
            options={this.masonryOptions}
            className={'about-row'}
            updateOnEachImageLoad={false}>
            <>
              {this.selectedMenu(this.state.menuArray)}
            </>
          </Masonry>
        </div>
      </section>
    );
  }

}

export default AboutUs;
