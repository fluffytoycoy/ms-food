import React from 'react';
import LinkDuo from '../Utils/LinkDuo/LinkDuo';
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
          <LinkDuo to="/" onClick={closeNav}>
            <img src="/img/Logos/nav-ms-grill.png"/>
          </LinkDuo>
        </div>
        <div className={`${menuOpen ? 'open' : ''} nav-wrapper`}>
          <ul className="navigation">
            <li>
              <div className="dropdown-btn">
                <LinkDuo to="/Menu" onClick={closeNav}><p>Menu</p></LinkDuo>
                <i onClick={handleServiceClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`menu-dropdown ${servicesOpen ? 'open' : ''}`}>
                <LinkDuo to="/Menu/Food" onClick={closeNav}><li>Food</li></LinkDuo>
                <LinkDuo to="/Menu/Drinks" onClick={closeNav}><li>Drinks</li></LinkDuo>
                <LinkDuo to="/Menu/Desserts" onClick={closeNav}><li>Dessert</li></LinkDuo>
                <LinkDuo to="/Menu/Kids" onClick={closeNav}><li>Kids</li></LinkDuo>
                <LinkDuo to="http://mikeshannonsgrill.com/mobile/menus/Catering.pdf" onClick={closeNav}><li>Catering</li></LinkDuo>
              </ul>
            </li>

            <li>
              <div className="dropdown-btn">
                <LinkDuo to="/About-Us" onClick={closeNav}>
                  <p>About Us</p>
                </LinkDuo >
                <i onClick={handleCultureClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`about-us-dropdown ${cultureOpen ? 'open' : ''}`}>
                <LinkDuo to="/About-Us/The-Venue" onClick={closeNav}>
                  <li>The Venue</li>
                </LinkDuo>
                <LinkDuo to="/About-Us/Art" onClick={closeNav}>
                  <li>Art Vandalae</li>
                </LinkDuo>
                <LinkDuo to="/About-Us/Mike">
                  <li>Mike Shannon</li>
                </LinkDuo>
              </ul>
            </li>
            <li>
              <div className="dropdown-btn">
                <LinkDuo to="/Work" onClick={closeNav}>
                  <p>Work</p>
                </LinkDuo>
              </div>
            </li>
            <li>
              <div className="dropdown-btn">
                <LinkDuo to="/#contact" onClick={closeNav}>
                  <p>Contact Us</p>
                </LinkDuo>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </section>

    );
}

export default Header;
