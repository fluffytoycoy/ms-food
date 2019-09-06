import React from 'react';
//import {Link} from 'react-router-dom';
import Row from '../Utils/Containers/Row'
import './Footer.scss';

function Footer(){
    return (
      <Row id="footer">
          <ul className="share-buttons">
            <li><a rel="noopener noreferrer" href="https://www.facebook.com" title="Share on Facebook" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
            <li><a rel="noopener noreferrer" href="https://www.linkedin.com" title="Share on Facebook" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a rel="noopener noreferrer" href="https://twitter.com/" target="_blank" title="Tweet"><i className="fab fa-twitter-square"></i></a></li>
          </ul>
        <div className="copy">
          <p>©{new Date().getFullYear()} Retro Roulette & CoyCoding | All Rights Reserved</p>
        </div>
     </Row>
    );
}

export default Footer;
