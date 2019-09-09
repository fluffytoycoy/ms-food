import React from 'react';


function TheVenue(){
    return (
      <div data-category="The-Venue" className="row-wrapper">
        <h4>The Venue</h4>
        <div className='menu-cols' >
          <div className="about-col">
            <p>
              Mike Shannon's Grill, the new upscale-casual eatery from the team behind downtown St. Louis'
              favorite steakhouse Mike Shannon's Steaks and Seafood, is the first new Shannon family restaurant in 27 years.
              Located in Edwardsville, IL in the Park At Plum Creek development, the restaurant serves comfort cuisine appealing
              to a wide variety of customers and dining occasions.
            </p>
            <p>
              Mike Shannon's Grill has a vintage athletic club look accented with modern industrial design elements. The venue features old school leather booths, raised-wood paneling, repurposed gym lights as well as an open ceiling and 18 flat-screen TVs. Baseball memorabilia is a highlight of the venue décor with memorabilia showcases including a trophy shelf at restaurant entry featuring items from Mike's personal collection and a wall covered with over 500 practice baseballs. Interspersed among the practice baseballs are autographed baseballs by all-time greats including Ted Williams, Mickey Mantle, Stan Musial, Johnny Bench, and Bob Gibson.
            </p>
            <p>
              The bar and grill includes three distinct areas: a family-friendly dining room, a high-energy bar area
              featuring a wraparound zinc bar with a 90" LCD display ideal for watching the game, and an outdoor patio
              area built around a central firepit that overlooks Plum Creek.
            </p>
          </div>
          <div className="about-col">
            <img src="/img/Backgrounds/ms_outside.jpg" width="600" height="300" alt="outside the restaurant"/>
            <h5 className="quote">
            "I'VE HAD A HOME IN EDWARDSVILLE FOR OVER 30 YEARS AND IT'S A GREAT COMMUNITY THAT IS A NATURAL FIT
            FOR OUR NEW PLACE." <b>- MIKE SHANNON</b>
            </h5>
          </div>
        </div>
      </div>
    );
}

export default TheVenue;
