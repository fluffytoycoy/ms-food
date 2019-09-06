import React from 'react';


const Row = props => {

  const layoutStyle = {
    margin: '0 auto',
    maxWidth: props.maxWidth ? props.maxWidth : 'unset'
  };

  return (
    <div className="row" style={layoutStyle} id={props.id}>
      {props.children}
    </div>
  )
}

export default Row;
