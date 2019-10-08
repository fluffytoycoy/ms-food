import React from 'react';
import './Phone.scss';

function Phone(props){
  const[iconOpen, toggleIcon] = React.useState(false)

    function handleMenuClick(){
      toggleIcon(!iconOpen)
    }
    return (
      <div id="phone" className={`${iconOpen ? 'active' : ''}`}>
        <i onClick={handleMenuClick} className="fa fa-phone" aria-hidden="true"></i>
        <p>618-655-9911</p>
      </div>

    );
}

export default Phone;
