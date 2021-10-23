import React from 'react';

const Footer = () => {
  const [pagesMenu, setPagesMenu] = React.useState(
    'footer__container-menu-disabled'
  );
  const [utilityMenu, setUtilityMenu] = React.useState(
    'footer__container-menu-disabled'
  );
  return (
    <footer>
      <div className='footer__container'>
        <div
          className='footer__container-menu'
          onClick={() =>
            setPagesMenu((prev) =>
              prev === 'footer__container-menu-disabled'
                ? 'footer__container-menu-active'
                : 'footer__container-menu-disabled'
            )
          }
        >
          <h4>Pages</h4>
          <div className={pagesMenu}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Blog</a>
            <a href='/'>Blog Post</a>
            <a href='/'>Pricing</a>
            <a href='/'>Pricing Single</a>
          </div>
        </div>
        <div
          className='footer__container-menu'
          onClick={() =>
            setUtilityMenu((prev) =>
              prev === 'footer__container-menu-disabled'
                ? 'footer__container-menu-active'
                : 'footer__container-menu-disabled'
            )
          }
        >
          <h4>Utility Pages</h4>
          <div className={utilityMenu}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Blog</a>
            <a href='/'>Pricing</a>
          </div>
        </div>
        <div className='footer__container-subscribe'>
          <h3>Subscribe to our newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consect etur adipiscing elit ut aliquam,
            purus sit amet luctus.
          </p>
          <form action='' method='get' className='footer__form'>
            <input type='text' placeholder='Your email address' />
            <button className='button'>Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <div className='logo'>
          <h2>Dark X</h2>
          <div></div> copyright
        </div>
      </div>
    </footer>
  );
};

export default Footer;
