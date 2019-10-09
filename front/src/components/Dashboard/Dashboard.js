import React from 'react';
import { connect } from 'react-redux'
import EnhancedTableBody from './Table/EnhancedTableBody';
//import './Dashboard.scss';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
      this.state ={

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
        console.log(nextProps)
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
      }
      else {
        nextProps.history.push('/404')
      }
    }

    return null;

    function isNotValidSection(category) {
      const index = prevState.avalibleCategories.findIndex(section => (
        section === category
      ))
      return (index >= 0)
    }

    function initialState(menu){
      const menuCategories = Object.keys(menu);
      let menuItems = [];
      menuCategories.forEach((category)=>{
        const categoryTypes = Object.keys(menu[category]);
        categoryTypes.forEach((type)=>{
          //push each meal array onto flat menu list
          menuItems.push(...menu[category][type])
        })
      })
      return {menuItems: menuItems}
    }
  }

  render(){
    return (
      this.props.menuExists ?
      <section className="body">
        <EnhancedTableBody {...this.props} menu={this.state.menuItems}/>
      </section>
      : <></>
    );
  }
}




const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps
)(Dashboard)
