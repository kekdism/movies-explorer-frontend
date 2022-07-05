import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__what'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__foot'>
        <p className='footer__copyright'>© {`${new Date().getFullYear()}`}</p>
        <nav>
          <ul className='footer__nav'>
            <li>
              <a className='footer__link' href='#'>
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className='footer__link' href='#'>
                Github
              </a>
            </li>
            <li>
              <a className='footer__link' href='#'>
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
