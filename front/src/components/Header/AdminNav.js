import React from 'react';
import LinkDuo from '../Utils/LinkDuo/LinkDuo';

function AdminNav(props){
  const [hidden, toggleHidden] = React.useState(!props.isLoggedIn)

  function loggingOut(){
    props.closeNav()
    toggleHidden(true);
    console.log(hidden)
  }
  return(
    <>
      <li className={hidden ? 'hidden' : ''}>
        <div className="dropdown-btn">
            <LinkDuo to="/Dashboard" onClick={props.closeNav}>
              <p>Dashboard</p>
            </LinkDuo>
        </div>
      </li>
      <li className={hidden ? 'hidden' : ''}>
        <div className="dropdown-btn">
            <LinkDuo to="/Logout" onClick={loggingOut}>
              <p>Logout</p>
            </LinkDuo>
        </div>
      </li>

    </>
  )
}

export default AdminNav;
