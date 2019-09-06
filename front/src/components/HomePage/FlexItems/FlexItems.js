import React from 'react';
import './FlexItems.scss';
import FlexItem from './FlexItem/FlexItem';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function FlexItems(){

  const flexItems = [
    {to: "/Menu", title: "Menu", img: "/img/Backgrounds/menu.jpg"},
    {to: "/The-Venue", title: "The Venue", img: "/img/Backgrounds/venue.jpg"},
    {to: "/About-Us", title: "About Us", img: "/img/Backgrounds/about_us.jpg"},
    {to: "/Catering", title: "Catering", img: "/img/Backgrounds/catering.jpg" },
    {to: "/Gift-Cards", title: "Gift Cards", img: "/img/Backgrounds/gift_card.png"},
    {to: "/Gallery", title: "Gallery", img: "/img/Backgrounds/gallery.jpg"},
  ]

  const renderedFlexItems = flexItems.map((item, index)=>{

    const backgroundStyle={
      background: item.img ? `url(${item.img})` : '#1f1f1f',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100%',
      zIndex: '-1'
    }

    const enter = (e) =>{
      console.log(e)
    }

    const exit = (e)=>{
      console.log(e)
    }

    return (
      <FlexItem item={item}/>
    )
  })

  return(
    <>
      {renderedFlexItems}
    </>
  )
}

export default FlexItems;
