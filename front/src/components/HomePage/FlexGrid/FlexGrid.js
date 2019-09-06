import React from 'react';
import './FlexGrid.scss';
import FlexItem from './FlexItem/FlexItem';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function FlexGrid(props){

  const flexItems = [
    {to: "/Menu", title: "Menu", img: "/img/Backgrounds/menu.jpg", btnText: "See the Menu", subText: "<p>Food, drinks and dessert</p><h4>What You Want</h4>"},
    {to: "/The-Venue", title: "The Venue", img: "/img/Backgrounds/venue.jpg", btnText: "Read More", subText: "<p>Vintage athletic club look</p><h4>Upscale-casual eatery</h4>"},
    {to: "/About-Us", title: "About Us", img: "/img/Backgrounds/about_us.jpg", btnText: "Read More", subText: "<p>We like sports</p><h4>Meet Mike</h4>"},
    {to: "/Catering", title: "Catering", img: "/img/Backgrounds/catering.jpg", btnText: "See the Menu", subText: "<p>Weddings or parties</p><h4>Simple Service</h4>"},
    {to: "/Gift-Cards", title: "Gift Cards", img: "/img/Backgrounds/gift_card.png", btnText: "Get a Gift Card", subText: "<p>Avoid the last minute panic</p><h4>Get a Gift Card</h4>"},
    {to: "/Gallery", title: "Gallery", img: "/img/Backgrounds/gallery.jpg", btnText: "See the Food", subText: "<p>Eat with your Eyes</p><h4>Eye candy</h4>"},
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
