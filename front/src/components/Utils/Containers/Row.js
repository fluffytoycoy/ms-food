import React from 'react';


const Row = props => {

  const layoutStyle = {
    margin: '0 auto',
    maxWidth: props.maxWidth ? props.maxWidth : '1600px'
  };

  return (
    <div style={layoutStyle} id={props.id}>
      {props.children}
    </div>
  )
}

export default Row;
