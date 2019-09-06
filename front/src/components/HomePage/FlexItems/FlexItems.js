import React from 'react';
import './FlexItems.scss';
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

    return (
        <Link  key={index}  className="grid-item" to={item.to} >
          <div>
            <div className="square">
              <h3>{item.title}</h3>
            </div>
          </div>
          <div>
            <p>Order Now</p>
          </div>
          <div className="grid-btn">
              <p>text</p>
              <div>
                <img src="/img/Icons/right-arrow.svg"/>
              </div>
          </div>
          <span style={backgroundStyle}>
          </span>
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
