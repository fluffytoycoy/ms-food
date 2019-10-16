import React from 'react';
import './MenuItemPage.scss'

const MenuItemPageHOC = ComponentToDebug => props => (
  props.filteredDashboardMenu ?
    <ComponentToDebug {...props}/>
    :
    <></>
);

export default MenuItemPageHOC;
