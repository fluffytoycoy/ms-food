import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import FlexGrid from './FlexGrid/FlexGrid';
import Contact from './Contact/Contact';
import Row from '../Utils/Containers/Row';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.scss';

function Home(props){
    return (
      <Row id="home">
        <Hero/>
        <FlexGrid id="grid"/>
        <Info/>
        <Contact {...props} />
      </Row>
    );
}

export default Home;
