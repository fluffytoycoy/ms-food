import React from 'react';
import './FlexItems.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function FlexItems(){
  const flexItems = [
    {to: "/Menu", title: "Menu"},
    {to: "/The-Venue", title: "The Venue"},
    {to: "/About-Us", title: "About Us"},
    {to: "/Catering", title: "Catering"},
    {to: "/Gift-Cards", title: "Gift Cards"},
    {to: "/Gallery", title: "Gallery"},
  ]

  const renderedFlexItems = flexItems.map((item, index)=>{
    return (
        <Link  key={index}  className="grid-item" to={item.to}>
            <h3>{item.title}</h3>
        </Link>
    )
  })

  return(
    <>
      {renderedFlexItems}
    </>
  )
}

export default FlexItems;
