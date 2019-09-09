import React from 'react';
import Masonry from 'react-masonry-component';

function Justin(){
    return (
      <div data-category="Justin" className="row-wrapper">
        <h4>Justin Vanmatre</h4>
        <Masonry options={{masonryOptions: 0}} className={'menu-cols'} updateOnEachImageLoad={false}>
          <div className="about-col tri">
            <img src="/img/Backgrounds/justin.jpg" width="600" height="600" alt="outside the restaurant"/>
            <h5 className="quote">
              "JUSTIN HAS BROUGHT 20 PLUS YEARS OF RESTAURANT EXPERIENCE TO MIKE SHANNON'S GRILL IN EDWARDSVILLE."
            </h5>
          </div>
          <div className="about-col tri">
            <p>
              Justin VanMatre, Mike Shannon's grandson, got his start in the restaurant business at the age of 13
              bussing tables at the original Mike Shannon's location in downtown St. Louis.  While chasing his dreams of
              professional soccer he has lived every where from Northern Ireland to Australia.  His college soccer career
              even led him to play SIUE in the quarterfinals of nationals back in 2005.  During the offseason of soccer
              he continued to work in the restaurant industry from cafes to a high end seafood restaurant in Cairns, Australia.
            </p>
            <p>
              He has brought his 20 plus years of restaurant experience to Mike Shannon's Grill in Edwardsville.
              "I've always loved Edwardsville since the days of taking the train here to visit my grandma and grandpa.
              I couldn't be more excited to own and lead such a beautiful restaurant in this amazing town.
            </p>
          </div>
          <div className="about-col tri">
            <h3 className="subTitle">AFFILIATIONS</h3>
            <ul>
              <li>Co- Chair — Cureiosity (Supports Mike and Judy Shannon Foundation and Siteman Cancer Center)</li>
              <li>10 plus years - Mike Shannon's Restaurants</li>
              <li>20 plus years - hospitality/restaurant industry</li>
              <li>Former owner - The Outfield</li>
            </ul>
          </div>
        </Masonry>
      </div>
    );
}

export default Justin;
