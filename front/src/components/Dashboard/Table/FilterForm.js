import React from "react";
import {setDashboardMenu} from '../../../actions/actions'
import { connect } from 'react-redux'

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      selectValue: 'name'
  };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({textValue: event.target.value});
    const menu = this.props.dashboardMenu.filter((menuItem)=>{
      var inputRegex = new RegExp(event.target.value, 'i');
      return inputRegex.test(menuItem[this.state.selectValue])
    })
    this.props.setDashboardMenu(menu)
  }

  handleSelectChange(event){
     this.setState({selectValue: event.target.value},
     ()=>{
       this.updateFilterList();
     });

  }

  updateFilterList(){
    const menu = this.props.dashboardMenu.filter((menuItem)=>{
      var inputRegex = new RegExp(this.state.textValue, 'i');
      return inputRegex.test(menuItem[this.state.selectValue])
    })
    this.props.setDashboardMenu(menu)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <div className="dashboard-search-bar">
        <input type="text" value={this.state.textValue} onChange={this.handleTextChange} />
          <select value={this.state.value} onChange={this.handleSelectChange}>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
            <option value="type">Type</option>
            <option value="ingredients">Ingredients</option>
          </select>
          <i className="fas fa-search"></i>
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    {setDashboardMenu}
)(FilterForm)
