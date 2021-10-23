import React from 'react';

const GetStartedTile = (props) => {
  return (
    <div className='getStarted__card'>
      <div>
        <div className='getStarted__card-number'>
          <h2>{props.number}</h2>
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <img src={props.image} alt='' />
      </div>
    </div>
  );
};

export default GetStartedTile;
