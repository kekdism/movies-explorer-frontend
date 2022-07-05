import { Link } from 'react-router-dom';
import './AccountInfoLink.css';

const AccountInfoLink = () => {
  return (
    <Link className='info-link' to='/profile'>
      <p className='info-link__text'>Аккаунт</p>
    </Link>
  );
};

export default AccountInfoLink;
