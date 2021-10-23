import React from 'react';
import clock from './img/clock.svg';
import stop from './img/stop.svg';

const BenefitsText = (props) => {
  return (
    <div className='benefits_text'>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className='benefits_text__text-block'>
        <img src={clock} alt='' />
        <div>
          <h4>{props.subtitle_1}</h4>
          <p>{props.text_1}</p>
        </div>
      </div>
      <div className='benefits_text__text-block'>
        <img src={stop} alt='' />
        <div>
          <h4>{props.subtitle_2}</h4>
          <p>{props.text_2}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsText;
