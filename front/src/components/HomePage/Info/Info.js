import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function Info(){
  return(
    <section id="info">
      <div className="info-wrapper">
          <div className="happy-hour">
            <h2>Happy</h2>
            <ScrollAnimation className="baseball-wrapper" animateOnce animateIn="zoomIn">
              <img src="/img/Logos/baseball.png" alt="baseball"/>
            </ScrollAnimation>
            <h2>Hour</h2>
          </div>
          <div className="info-body">
            <ScrollAnimation className="info-animate" animateOnce animateIn="fadeInLeft">
              <div className="times">
                <p>Monday - Thursday</p>
                <div className="happy-hour-numbers">
                  <span>3</span>
                  <span className="dash">-</span>
                  <span>6</span>
                  <span className="pm">PM</span>
                </div>
                <p>Friday - Sunday</p>
                <div className="happy-hour-numbers">
                  <span>8</span>
                  <span className="dash">-</span>
                  <span>10</span>
                  <span className="pm">PM</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="info-animate" animateOnce animateIn="fadeInRight">
              <div className="featured-meals">
                <p>1/2 Price Appetizers</p>
                <p>$3 Wells</p>
                <p>$2 Bud Light, Busch, Budweiser Drafts</p>
                <p>$5 Select Cabernet and Chardonnay</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
    </section>
  )
}

export default Info;
