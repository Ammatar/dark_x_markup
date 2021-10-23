import React from 'react';
import BenefitsText from './BenefitsText';
import content_left from './img/content_left.png';
import content_chart from './img/content_chart.png';

const Benefits = () => {
  return (
    <div className='benefits__container'>
      <div className='benefits__container-block'>
        <img src={content_left} alt='' className='benefits_img' />
        <BenefitsText
          title={'Real-Time Trading Like Never Before.'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
          subtitle_1={'<1 Sec Operations'}
          text_1={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
          subtitle_2={'No Commissions'}
          text_2={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
        />
      </div>
      <div className='benefits__container-block reverse'>
        <img src={content_chart} alt='' className='benefits_img' />
        <BenefitsText
          title={'Built-in Enterprise Encryption and Security'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
          subtitle_1={'256-Bit AES Encryption'}
          text_1={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
          subtitle_2={'Advanced Security Standards'}
          text_2={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.'
          }
        />
      </div>
    </div>
  );
};

export default Benefits;
