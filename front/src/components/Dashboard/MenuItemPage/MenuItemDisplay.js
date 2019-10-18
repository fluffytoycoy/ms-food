import React, {useState} from 'react';



function MenuItemDisplay(props){

  return(
    <div className="col">
    {props.menuItemDisplay ?
        <div className="menu-cols form">
            <h4>{props.menuItemDisplay.type}</h4>
            <div>
              <h6>{props.menuItemDisplay.name} {props.menuItemDisplay.price}</h6>
              {props.menuItemDisplay.served ? <p>{props.menuItemDisplay.served}</p> : <></>}
              {props.menuItemDisplay.ingredients ? <p>{props.menuItemDisplay.ingredients}</p> : <></>}
            </div>
        </div>
      :
      <></>
    }
    </div>
  )

}

export default MenuItemDisplay;
