import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Hero.scss'
import HeroCarousel from './HeroCarousel/HeroCarousel';

function Hero(){


  return(
    <section id="hero">
        <div className="hero-title">
          <img src="/img/Logos/ms-grill.png"/>
        </div>
        <HeroCarousel/>
    </section>
  )
}

export default Hero;
