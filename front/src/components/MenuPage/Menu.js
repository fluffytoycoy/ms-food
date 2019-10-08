import React, {Component} from 'react';
import MenuItem from './MenuItem.js'
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import './Menu.scss';

  class Menu extends Component{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 1000,
        menuItems: undefined,
        avalibleCategories: undefined,
        selectedMenu: this.props.match.params.category,
      }
    }


  static getDerivedStateFromProps(nextProps, prevState){
    //same as code in Menu page should make a comp and inherit from that
    //Tab Template made needs cleaned up

    const newMenuURL = nextProps.match.params.category;
    let newState = null;

    //DerivedState only triggered if menuExists
    if(nextProps.menuExists){
      //If menuState hasn't been set return Intial comp state it.
      if(!prevState.menuItems){
        return {...initialState(nextProps.menu)}
      }

      //Handles URL changes <--> Buttons
      if (!newMenuURL || isNotValidSection(newMenuURL)) {
        if (newMenuURL !== prevState.selectedMenu) {
          newState = {
            selectedMenu: newMenuURL
          }
        }
        return newState;
      } else {
        nextProps.history.push('/404')
      }
      return null;
    }

    function isNotValidSection(category) {
      const index = prevState.avalibleCategories.findIndex(section => (
        section === category
      ))
      return (index >= 0)
    }

    function initialState(menu){
      const menuCategories = Object.keys(menu);
      let categorizedMenuItems = {};
      menuCategories.forEach((category)=>{
        const categoryTypes = Object.keys(menu[category]);
        const menuItems = categoryTypes.map((type)=>{
          const item = menu[category][type].map((menuItem, index)=>{
            return <MenuItem item={menuItem} data-category={type} key={index}/>
          })
          return (
            <div className="category-col" key={type} data-category={category}>
               <h4 >{type}</h4>
               {item}
            </div>
          )
        })
        categorizedMenuItems[category] = [...menuItems]
      })
      return {selectedMenu: newMenuURL, menuItems:categorizedMenuItems, avalibleCategories: menuCategories}
    }

  }

  changeMenu(category){
    this.props.history.push(`/Menu/${category}`)
  }

  selectedMenuItems(){
      //same as code in Menu page should make a comp and inherit from that
      //same as getDerivedState Tab section needs work
      return this.state.selectedMenu ? this.state.menuItems[this.state.selectedMenu] : Object.values(this.state.menuItems)
  }

  render(){
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
                {this.selectedMenuItems()}
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
