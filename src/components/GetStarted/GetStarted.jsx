import React from 'react';
import GetStartedTile from './GetStartedTile';

const GetStarted = () => {
  return (
    <div className='getStarted'>
      <div className='getStarted__button-block'>
        <div>Create your account and start trading today</div>
        <div className='buttons'>
          <button className='button'>Get Started</button>
          <button className='button'>View Prising</button>
        </div>
      </div>
      <div className='getStarted__text-block'>
        <div className='item'>
          <h3>How to get started</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum risus urna at. Curabitur non lectus eget magna.
          </p>
        </div>
        <div className='getStarted__text-block-block'>
          <GetStartedTile
            number={1}
            title={'Create your account'}
            text={
              'Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. '
            }
            image={''}
          />
          <GetStartedTile
            number={2}
            title={'Customize your profile'}
            text={
              'Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. '
            }
            image={''}
          />
          <GetStartedTile
            number={3}
            title={'Customize your profile'}
            text={
              'Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. '
            }
            image={''}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
