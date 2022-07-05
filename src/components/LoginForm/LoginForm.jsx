import './LoginForm.css';

import LabeledInput from '../LabeledInput/LabeledInput';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <div className='login__fields-container'>
        <ul className='login__fields'>
          <li>
            <LabeledInput label='E-mail' type='email' />
          </li>
          <li>
            <LabeledInput label='Пароль' type='password' />
          </li>
        </ul>
        <p className='login__error'>Что-то пошло не так...</p>
      </div>
      <div className='login__links-container'>
        <button type='submit' className='login__submit'>
          Войти
        </button>
        <p className='login__redirect'>
          Ещё не зарегистрированы?
          <Link className='login__link' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
