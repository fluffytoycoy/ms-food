import React from 'react';
import Masonry from 'react-masonry-component';

function Mike(){
    return (
      <>
        <h4>Mike Shannon</h4>
        <Masonry options={{masonryOptions: 0}} className={'menu-cols'} updateOnEachImageLoad={false}>
          <div className="about-col tri">
            <img src="/img/Backgrounds/mike_at_bat.jpg" width="600" height="600" alt="outside the restaurant"/>
            <p>
              For the past 50 years, Mike Shannon has been either creating or describing memorable moments in St. Louis
              Cardinals history. "For many Cardinals fans, Mike Shannon has become as much a part of Cardinals baseball
              as the "Birds on the Bat", Cardinals' Chairman William O. DeWitt, Jr. stated recently while honoring Mike
              for a half-century of service with the team. Shannon, who first joined the Cardinals organization in 1958
              after a standout prep career made his Major League debut with the Cardinals in 1962.
            </p>
            <p>
              He became the Cardinals
              regular third baseman during their 1964 World Championship season and was a part of three Cardinals World Series
              teams (1964, 1967 & 1968). During the '68 season, Shannon hit a record 26 game winning RBIs and was voted
              All Major League Third Baseman by the Associated Press.
            </p>
            <h5 className="quote">
              "FOR MANY CARDINALS FANS, MIKE SHANNON HAS BECOME AS MUCH A PART OF CARDINALS BASEBALL AS THE "BIRDS ON THE BAT"
            </h5>
          </div>
          <div className="about-col tri">
            <p>
              After his playing career was cut short due to illness, Shannon joined the team's front office staff in 1971
              and he started his broadcasting career in 1972. In his 36 seasons as a member of the team's radio and TV broadcast
              teams, Shannon has been a part of five Cardinals World Series seasons (1982, 1985, 1987, 2004 & 2006) and was
              awarded an Emmy in 1985 for his work on the baseball telecasts.
            </p>
            <p>
              Prior to his tenure with the Cardinals, Mike Shannon had already established himself as one of Missouri's
              top athletes. During his years at CBC High School and University of Missouri, Shannon excelled at baseball
              and football. To this date, Shannon is the only athlete to be named Missouri Prep Player of the Year in basketball
              & football in the same year. In 1999, he was inducted into the Missouri Sports Hall of Fame. Shannon's rapport
              with sports fans and players makes him a favorite on the speaking circuit throughout the USA. Mike has raised
              over a million dollars for charities.
            </p>
            <img src="/img/Backgrounds/mike_headset.jpg" width="600" height="300" alt="outside the restaurant"/>
            <p>
              His most recent charitable efforts have been directed towards The Mike and Judy Shannon Brain Tumor Research Fund
              established in honor of his wife. Among the more recent awards given to Shannon are: The St. Louis Ambassadors'
              1993 Sportsman of the Year Award; in 1994, the Christian Brothers Letters of Affiliation, the highest honor
              bestowed by the Brothers on persons who have given so much without acclaim or any desire for reward. Mike was
              also named 1996 Champion For Kids by the St. Louis Variety Club.
            </p>
          </div>
          <div className="about-col tri">
            <h3 className="subTitle">AFFILIATIONS</h3>

            <h6>Sports</h6>
            <ul>
              <li>All-State – Basketball, Football and Baseball</li>
              <li>Metro Player of the Year</li>
              <li>Missouri prep Player of the Year – Basketball & Football (1957)</li>
              <li>St. Louis Cardinals Baseball Player</li>
              <li>National League Pennant (1964, 1967, 1968)</li>
              <li>World Series Championship (1964, 1967)</li>
              <li>AP All Major League Third Baseman (1968)</li>
              <li>National League Player of the Month</li>
            </ul>

            <h6>Broadcasting</h6>
            <ul>
              <li>St. Louis Cardinals Baseball Radio/TV Broadcaster</li>
              <li>Emmy Award, St. Louis Chapter (1985)</li>
            </ul>

            <h6>Charities</h6>
            <ul>
              <li>CBC/Mike Shannon Charity Event, Founder/Chairperson</li>
              <li>Telethon of the Stars – Master of Ceremonies</li>
              <li>Head First Foundation Fund Raising Chairperson</li>
              <li>St. Louis Pinch-Hitters, Honorary Chairperson (1994)</li>
              <li>St. Louis Pinch-Hitters, Special Award (1996)</li>
              <li>St. Louis Variety Club – Champion For Kids (1996)</li>
            </ul>

            <h6>Civic & Education</h6>
            <ul>
              <li>St. Louis Ambassadors' Sportsman of the Year (1993)</li>
              <li>Catholic Youth Council's Community Achievement Awar</li>
              <li>Christian Brothers, Letters of Affiliation (1994)</li>
              <li>St. Louis Backstoppers</li>
              <li>Jimmy S. Smith Memorial Showdown Award (2000)</li>
            </ul>

            <div>
              <h6>Business</h6>
              <ul>
                <li>Mike Shannon's Steak and Seafood Restaurant Founder and Owner (15 years)</li>
                <li>T.M. Shannon, Inc. - CEO</li>
                <li>Heartland Associates, Board of Directors, Founder</li>
                <li>St. Anthony's Hospital, Alton, Illinois Board of Directors</li>
              </ul>
            </div>
          </div>
        </Masonry>
      </>
    );
}

export default Mike;
