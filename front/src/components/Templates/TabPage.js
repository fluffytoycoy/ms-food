import {Component} from 'react';

  class TabPage extends Component{
    constructor(props){
      super(props);
      this.state={
        masonryOptions: 0,
        menuArray: [ ],
        selectedMenu: this.props.match.params.category,
        avalibleSections: []
      }
      this.selectedMenu = this.selectedMenu.bind(this)
    }

  static getDerivedStateFromProps(nextProps, prevState){
    //same as code in Menu page should make a comp and inherit from that
    const newCategory = nextProps.match.params.category;
    let newState = null;

    if(!newCategory || isNotValidSection(newCategory)){
      if(newCategory !== prevState.selectedMenu){
        newState = {selectedMenu: newCategory}
      }
      return newState;
    } else{
      nextProps.history.push('/404')
    }

    function isNotValidSection(category){
      const index = prevState.avalibleSections.findIndex(section=>(
        section ===category
      ))
      return (index >= 0)
    }
  }


  selectedMenu(menuArray){
    //same as code in Menu page should make a comp and inherit from that
      return menuArray.filter(menuDOM =>{
        return !this.state.selectedMenu || menuDOM.props['data-category'] === this.state.selectedMenu
      })
  }

}

export default TabPage;
