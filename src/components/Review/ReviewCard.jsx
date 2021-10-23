import React from 'react';

const ReviewCard = (props) => {
  return (
    <div className='review__card'>
      <div>
        <h3>{props.title}</h3>
        <div>
          <p>{props.text}</p>
          <p>{props.author}</p>
          <p>{props.position}</p>
        </div>
      </div>
      <img src={props.image} alt='' />
    </div>
  );
};

export default ReviewCard;
