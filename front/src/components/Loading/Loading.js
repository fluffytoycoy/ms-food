import React from 'react';
import './Loading.scss'

function Loading(props){
    return (
      <section id="loading">
        <div>
          <img src="/img/Logos/ms-grill.png"/>
          <div className="circle"></div>
        </div>
      </section>
    );
}

export default Loading;
