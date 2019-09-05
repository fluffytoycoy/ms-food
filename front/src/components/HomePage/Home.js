import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import FlexItems from './FlexItems/FlexItems';
import BlogLinks from './BlogLinks/BlogLinks';
import Contact from './Contact/Contact';
import Row from '../Utils/Containers/Row';
import FlexGrid from '../Utils/Containers/FlexGrid';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.scss';

function Home(props){
    return (
      <Row id="home">
        <Hero/>
        <FlexGrid id="grid">
          <FlexItems/>
        </FlexGrid>
        <Info/>
        <BlogLinks/>
        <Contact {...props} />
      </Row>
    );
}

export default Home;
