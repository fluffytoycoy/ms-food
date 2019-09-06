import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header(){
  const[menuOpen, toggleNavMenu] = React.useState(false)
  const[servicesOpen, toggleServicesMenu] = React.useState(false)
  const[cultureOpen, toggleCultureMenu] = React.useState(false)
  const menuArray = [toggleServicesMenu, toggleCultureMenu];

  function closeAllMenusExcept(menu){
    if(window.innerWidth <= 768){
      menuArray.forEach(func=>{
        if(func !== menu){
          console.log('here')
          func(false);
        }
      })
    }
  }

  function handleServiceClick() {
    if(window.innerWidth <= 768){
      closeAllMenusExcept(toggleServicesMenu);
      toggleServicesMenu(!servicesOpen)
    }
  }

  function handleCultureClick() {
    if(window.innerWidth <= 768){
      closeAllMenusExcept(toggleCultureMenu);
      toggleCultureMenu(!cultureOpen)
    }
  }

    function handleMenuClick(){
      toggleNavMenu(!menuOpen)
    }

    function closeNav(){
      closeAllMenusExcept()
      toggleNavMenu(false)
    }

    return (
      <section id="header">
      <div>
        <div onClick={handleMenuClick}className="menu-btn"><i className="fas fa-bars"></i></div>
        <div className="logo">
          <Link to="/" onClick={closeNav}>
            <img src="/img/Logos/nav-ms-grill.png"/>
          </Link>
        </div>
        <div className={`${menuOpen ? 'open' : ''} nav-wrapper`}>
          <ul className="navigation">
            <li>
              <div className="dropdown-btn">
                <Link to="/Services" onClick={closeNav}>
                  <p>Services</p>
                </Link>
                <i onClick={handleServiceClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${servicesOpen ? 'open' : ''}`}>
                <Link to="/Services/Cloud" onClick={closeNav}>
                  <li>Cloud Systems</li>
                </Link>
                <Link to="/Services/Data-Engineering" onClick={closeNav}><li>Data Engineering</li></Link>
                <Link to="/Services/Decision-Science" onClick={closeNav}><li>Decision Science</li></Link>
              </ul>
            </li>

            <li>
              <div className="dropdown-btn">
                <Link to="/Culture" onClick={closeNav}>
                  <p>Culture</p>
                </Link >
                <i onClick={handleCultureClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${cultureOpen ? 'open' : ''}`}>
                <Link to="/Culture/#core-beliefs" onClick={closeNav}>
                  <li>Core Beliefs</li>
                </Link>
                <Link to="/Culture/Community" onClick={closeNav}>
                  <li>Community</li>
                </Link>
                <Link to="/Blog">
                  <li>Blog</li>
                </Link>
              </ul>
            </li>
            <li>
              <div className="dropdown-btn">
                <Link to="/Work" onClick={closeNav}>
                  <p>Work</p>
                </Link>
              </div>
            </li>
            <li>
              <div className="dropdown-btn">
                <Link to="/#contact" onClick={closeNav}>
                  <p>Contact Us</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </section>

    );
}

export default Header;
