import React from 'react';
import {setSelectedMenuItem} from '../../../actions/actions'
import { connect } from 'react-redux'


class EditMenuItem extends React.Component{
  constructor(props){
    super(props);
      this.state ={

    }
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    if(!this.props.selectedMenuItem && this.props.dashboardMenu){
      const menuItemId = Number(this.props.match.params.id);
      if(menuItemId){
        const menuItem = this.props.dashboardMenu.filter((menuItem)=>{
          return menuItem.id === menuItemId
        })[0];
        console.log(menuItem)
        if(menuItem){
          this.props.setSelectedMenuItem(menuItem)
        } else{
          this.props.history.push('/dashboard');
        }
      }else{
        this.props.history.push('/dashboard');
      }
    }
  }

  setFilterMenu(menu){
    this.setState({
      filteredMenu: menu
    })
  }

  render(){
    console.log(this.props)
    return (
      <section className="body">
          {this.props.selectedMenuItem ?
            this.props.match.params.id
            :
            <>loading</>
          }
      </section>
    );
  }
}




const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setSelectedMenuItem}
)(EditMenuItem)
