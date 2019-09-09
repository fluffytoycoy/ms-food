import React from 'react';
import './FlexGrid.scss';
import FlexItem from './FlexItem/FlexItem';

import ScrollAnimation from 'react-animate-on-scroll';

function FlexGrid(props){

  const flexItems =
  [
    {to: "/Menu", title: "Menu", img: "/img/Backgrounds/menu.jpg", btnText: "See the Menu", subText: "<p>Food, drinks and dessert</p><h4>What You Want</h4>", href: "/Menu/"},
    {to: "/The-Venue", title: "The Venue", img: "/img/Backgrounds/venue.jpg", btnText: "Read More", subText: "<p>Vintage athletic club look</p><h4>Upscale-casual eatery</h4>", href: "/About-Us/The-Venue"},
    {to: "/About-Us/Mike", title: "About Us", img: "/img/Backgrounds/about_us.jpg", btnText: "Read More", subText: "<p>We like sports</p><h4>Meet Mike</h4>", href: "/About-Us/Mike"},
    {to: "/Catering", title: "Catering", img: "/img/Backgrounds/catering.jpg", btnText: "See the Menu", subText: "<p>Weddings or parties</p><h4>Simple Service</h4>", href: "http://mikeshannonsgrill.com/mobile/menus/Catering.pdf"},
    {to: "/Gift-Cards", title: "Gift Cards", img: "/img/Backgrounds/gift_card.png", btnText: "More Info", subText: "<p>Avoid the last minute panic</p><h4>Get a Gift Card</h4>", href: "https://onelink.quickgifts.com/merchant/mike-shannons-grill-edwardsville/"},
    {to: "/Gallery", title: "Gallery", img: "/img/Backgrounds/gallery.jpg", btnText: "See the Food", subText: "<p>Eat with your Eyes</p><h4>Eye candy</h4>", href: "/Gallery/"},
  ]

  const styles ={
    display: 'flex'
  }

  const renderedFlexItems = flexItems.map((item, index)=>{
    return (
      <FlexItem item={item} key={index}/>
    )
  })

  return(
    <section style={styles} id={props.id}>
      {renderedFlexItems}
    </section>
  )
}

export default FlexGrid;
