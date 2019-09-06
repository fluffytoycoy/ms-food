import React from 'react';
import './FlexGrid.scss';
import FlexItem from './FlexItem/FlexItem';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function FlexGrid(props){

  const flexItems = [
    {to: "/Menu", title: "Menu", img: "/img/Backgrounds/menu.jpg"},
    {to: "/The-Venue", title: "The Venue", img: "/img/Backgrounds/venue.jpg"},
    {to: "/About-Us", title: "About Us", img: "/img/Backgrounds/about_us.jpg"},
    {to: "/Catering", title: "Catering", img: "/img/Backgrounds/catering.jpg" },
    {to: "/Gift-Cards", title: "Gift Cards", img: "/img/Backgrounds/gift_card.png"},
    {to: "/Gallery", title: "Gallery", img: "/img/Backgrounds/gallery.jpg"},
  ]

  const styles ={
    display: 'flex'
  }

  const renderedFlexItems = flexItems.map((item, index)=>{
    return (
      <FlexItem item={item}/>
    )
  })

  return(
    <section style={styles} id={props.id}>
      {renderedFlexItems}
    </section>
  )
}

export default FlexGrid;
