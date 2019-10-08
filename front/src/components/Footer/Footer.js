import React from 'react';
//import {Link} from 'react-router-dom';
import './Footer.scss';

function Footer(){
    return (
      <section id="footer">
        <div className="footer-grid">
          <div className="hours">
            <h4>Hours</h4>
            <table>
            <tbody>
              <tr>
                <th>Monday - Thursday</th>
                <td>11AM - 9PM</td>
              </tr>
              <tr>
                <th>Friday - Saturday</th>
                <td>11AM - 10PM</td>
              </tr>
              <tr>
                <th>Sunday</th>
                <td>10AM - 8PM</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="logo">
            <img alt="mike shannons grill"src="/img/Logos/ms-grill.png"/>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <div>
              <div>
                <h5>Phone:</h5>
                <p>618-655-9911</p>
              </div>
              <div>
                <h5>Email:</h5>
                <p>info@mikeshannonsgrill.com</p>
              </div>
              <div>
                <h5>Location:</h5>
                <p>871 South Arbor Vitae</p>
                <p>Edwardsville, IL 62025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>©{new Date().getFullYear()} Retro Roulette & CoyCoding | All Rights Reserved</p>
        </div>
     </section>
    );
}

export default Footer;
