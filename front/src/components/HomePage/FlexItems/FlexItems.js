import React from 'react';
import './FlexItems.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function FlexItems(){
  const flexItems = [
    {to: "/Services/Cloud", title: "cloud"},
    {to: "/Services/Data-Engineering", title: "data"},
    {to: "/Services/Decision-Science", title: "decision"},
    {to: "/Services/Cloud", title: "cloud"},
    {to: "/Services/Data-Engineering", title: "data"},
    {to: "/Services/Decision-Science", title: "decision"},
  ]

  const renderedFlexItems = flexItems.map((item, index)=>{
    return (
      <ScrollAnimation offset={50} key={index} animateOnce animateIn="fadeInUp" key={index} className="grid-item">
        <Link to={item.to}><div className="clouds">
          <h3>{item.title}</h3>
          </div>
        </Link>
      </ScrollAnimation>
    )
  })

  return(
    <>
      {renderedFlexItems}
    </>
  )
}

export default FlexItems;
