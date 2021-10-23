import React from 'react';

const Tile = (props) => {
  return (
    <div className='tiles_container__item'>
      <div className='tiles_container__img-box'>
        <img src={props.image} alt='' />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Tile;
