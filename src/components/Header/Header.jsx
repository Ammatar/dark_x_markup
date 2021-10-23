import React from 'react';
import ButtonsLine from '../Shared/ButtonsLine';
import content from './img/content_main.png';
import content_left from './img/content_left.png';
import content_chart from './img/content_chart.png';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <h2>Dark X</h2>
          <div></div>
        </div>
        <div className='menu__block'>
          <nav className='menu'>
            <a href='/' className='menu__menu-item'>
              Home
            </a>
            <a href='/' className='menu__menu-item'>
              About
            </a>
            <a href='/' className='menu__menu-item'>
              Pricing
            </a>
            <a href='/' className='menu__menu-item'>
              Pages
            </a>
            <a href='/' className='menu__menu-item'>
              Cart(0)
            </a>
          </nav>
          <div className='login_menu'>
            <a href='/' className='menu__menu-item'>
              Sign in
            </a>
            <div className='menu__menu-item button'>Get Started</div>
          </div>
        </div>
      </header>
      <div className='content-title'>
        <h1>Next-Gen Investing App</h1>
        <h2>for modern investors</h2>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam
        quam viverra purus tellus purus. Convallis fusce
      </div>
      <ButtonsLine />
      <div className='content_img'>
        <img src={content_left} alt='' className='small left' />
        <div>
          <img src={content} alt='' className='main' />
        </div>
        <img src={content_chart} alt='' className='small right' />
      </div>
    </>
  );
};

export default Header;
