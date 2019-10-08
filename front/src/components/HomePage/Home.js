import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import FlexGrid from './FlexGrid/FlexGrid';
import './Home.scss';

function Home(props){
    return (
      <section className="body" id="home">
        <Hero/>
        <Info/>
        <FlexGrid id="grid"/>
      </section>
    );
}

export default Home;
