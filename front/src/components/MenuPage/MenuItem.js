import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';

function MenuItem(props) {

  return (
    <div key={props.mapKey} data-category={props.item.category}>
      <h6>{props.item.name} {props.item.price} </h6>
      {props.item.served ? <p>{props.item.served}</p> : null}
      {props.item.ingredients ? <p>{props.item.ingredients}</p> : null}
    </div>
  );
}

export default MenuItem;
