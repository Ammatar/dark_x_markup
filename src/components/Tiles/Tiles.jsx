import React from 'react';
import ButtonsLine from '../Shared/ButtonsLine';
import images from './img/index.js';
import Tile from './Tile';

const Tiles = () => {
  return (
    <>
      <div className='tiles_container'>
        <Tile
          image={images.arrows}
          title={'Real Time Trading'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
        <Tile
          image={images.charts}
          title={'Advanced Charts'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
        <Tile
          image={images.shield}
          title={'Enterprise Grade Security'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
        <Tile
          image={images.stocks}
          title={'ETFs and stocks'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
        <Tile
          image={images.bag}
          title={'Currencies & Commodities'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
        <Tile
          image={images.bitcoin}
          title={'Cryptocurrencies'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
        />
      </div>
      <ButtonsLine />
    </>
  );
};

export default Tiles;
