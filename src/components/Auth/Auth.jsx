import './Auth.css';
import LogoIcon from '../Icons/LogoIcon.jsx';

const Auth = ({ children, title }) => {
  return (
    <section className='auth'>
      <div className='auth__container'>
        <LogoIcon color='var(--accent-color)' />

        {children}
      </div>
    </section>
  );
};

export default Auth;
