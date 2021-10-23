import React from 'react';
import ReviewCard from './ReviewCard';
import avatar from './img/avatar.png';
import arrowLeft from './img/arrowLeft.svg';
import arrowRight from './img/arrowRight.svg';

const Review = () => {
  const images = { avatar, arrowLeft, arrowRight };
  const [index, setIndex] = React.useState(0);
  const reviewCards = [
    {
      title: '“A truly next-gen trading app”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eget iaculis vitae elementum, in sagittis, hac.',
      author: 'Vishal Saklani',
      position: 'UI/UX Designer',
    },
    {
      title: '“A truly next-gen trading app 1”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eget iaculis vitae elementum, in sagittis, hac.',
      author: 'Vishal Saklani',
      position: 'UI/UX Designer',
    },
    {
      title: '“A truly next-gen trading app 2”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eget iaculis vitae elementum, in sagittis, hac.',
      author: 'Vishal Saklani',
      position: 'UI/UX Designer',
    },
  ];
  function clickHandle(direction) {
    if (direction === 'left') {
      if (index > 0) {
        setIndex((el) => el - 1);
      } else {
        setIndex(reviewCards.length - 1);
      }
    }
    if (direction === 'right') {
      if (index < reviewCards.length - 1) {
        setIndex((el) => el + 1);
      } else {
        setIndex(0);
      }
    }
  }
  return (
    <>
      <div className='review__title'>
        <h2>What our clients say</h2>
      </div>
      <div className='review__container'>
        <div className='review__container-arrow'>
          <img
            src={images.arrowLeft}
            alt=''
            onClick={() => clickHandle('left')}
          />
        </div>
        <ReviewCard
          title={reviewCards[index].title}
          text={reviewCards[index].text}
          author={reviewCards[index].author}
          position={reviewCards[index].position}
          image={images.avatar}
        />
        <div className='review__container-arrow'>
          <img src={arrowRight} alt='' onClick={() => clickHandle('right')} />
        </div>
      </div>
    </>
  );
};

export default Review;
