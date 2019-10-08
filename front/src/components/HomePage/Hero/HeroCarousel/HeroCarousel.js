import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './HeroCarousel.scss';

function HeroCarousel(){

  const options= {
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    autoPlay: true,
    transitionTime: 500,
    interval: 5000,
    infiniteLoop: true
    }

  const flexItems = [
        {img: "/img/Backgrounds/bar_large.jpg"},
        {img: "/img/Backgrounds/ice_cream_hero.jpg"},
        {img: "/img/Backgrounds/baseballs_large.jpg"},
        {img: "/img/Backgrounds/steak_large.jpg"},
        {img: "/img/Backgrounds/booth_large.jpg"},
      ]

  const renderedFlexItems = flexItems.map((item, index)=>{
        const bgStyles = {
          background: `url(${item.img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }

        return (
          <div className="slide-img" style={bgStyles} key={index}>
          </div>
        )
      })

  return (
      <Carousel {...options}>
        {renderedFlexItems}
      </Carousel>
  );
}

export default HeroCarousel;
