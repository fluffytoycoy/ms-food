import React from 'react';


const MenuItemPageHOC = ComponentToDebug => props => (
  props.filteredDashboardMenu ?
    <ComponentToDebug {...props}/>
    :
    <></>


);

export default MenuItemPageHOC;
