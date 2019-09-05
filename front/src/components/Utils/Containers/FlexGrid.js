import React from 'react';

const FlexGrid = props => {

  const styles = {
    display: 'flex',
  };

  return (
    <section style={styles} id={props.id}>
      {props.children}
    </section>
  )
}

export default FlexGrid;
