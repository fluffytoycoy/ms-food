import React from 'react';
import './Hero.scss'
import HeroCarousel from './HeroCarousel/HeroCarousel';

function Hero(){


  return(
    <section id="hero">
        <div className="hero-title">
          <img alt="mike shannons grill"src="/img/Logos/ms-grill.png"/>
        </div>
        <HeroCarousel/>
    </section>
  )
}

export default Hero;
