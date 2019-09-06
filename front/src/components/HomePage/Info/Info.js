import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function Info(){
  return(
    <section id="info">
      <div className="info-wrapper">
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <div>
            <h2>Happy Hour</h2>
            <div className="times">
              <p>3-5:30PM Monday-Thursday</p>
              <p>9-10PM Friday and Saturday Night</p>
            </div>
            <div className="featured-meals">
              <p>1/2 Price Appetizers<span>* (Excludes Crab Dip, Crab Cakes and Pork Shanks)</span></p>
              <p>$3 Wells</p>
              <p>$2 Bud Light, Busch, Budweiser Drafts</p>
              <p>$5 Select Cabernet and Chardonnay</p>
              <p>Patio and Bar Only</p>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce  animateIn="fadeInRight">
            <div>
              <h2>Brunch</h2>
              <div className="times">
                <p>Saturdays 11AM-2PM and Sundays 10AM-2PM</p>
              </div>
              <div className="featured-meals">
                <p>$4 Biscuits & Gravy</p>
                <p>$10 Breakfast Bowls</p>
                <p>$10 Crêpes</p>
                <p>$9 Pancakes & French Toast Meals</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
    </section>
  )
}

export default Info;
