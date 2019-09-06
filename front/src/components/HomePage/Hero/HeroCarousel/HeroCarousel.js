import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        {img: "https://mikeshannonsgrill.com/bgimages/venue01.jpg?img=1567718978766"},
        {img: "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059037-33-SITC-Desktop.jpg"},
        {img: "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059047-62-SP-YA-By-The-Slice-2019.jpg"},
        {img: "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059037-33-SITC-Desktop.jpg"},
        {img: "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059050-50-BSK-Sharing-Desserts-1800px.jpg"},
        {img: "https://mikeshannonsgrill.com/bgimages/venue01.jpg?img=1567718978766"},
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
