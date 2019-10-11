import React from 'react';
import EnhancedTableBody from './ConsolePage/Table/EnhancedTableBody';
import MenuItemPage from './MenuItemPage';

function MenuItemRouter(props){
  switch (props.match.path){
    case '/Dashboard/:Tab/Edit/:id':
    return <ConsolePage {...props} />
    case '/Dashboard/:Tab/AddConsole':
    return <ConsolePage {...props} addGame />
    default:
    return <EnhancedTableBody {...props}/>;
  }
}

export default MenuItemRouter;
