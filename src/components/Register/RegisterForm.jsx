import './RegisterForm.css';

import LabeledInput from '../LabeledInput/LabeledInput';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <form className='register'>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <div className='register__fields-container'>
        <ul className='register__fields'>
          <li>
            <LabeledInput label='Имя' type='text' />
          </li>
          <li>
            <LabeledInput label='E-mail' type='email' />
          </li>
          <li>
            <LabeledInput label='Пароль' type='password' />
          </li>
        </ul>
        <p className='register__error'>Что-то пошло не так...</p>
      </div>
      <div className='register__links-container'>
        <button type='submit' className='register__submit'>
          Зарегистрироваться
        </button>
        <p className='register__redirect'>
          Уже зарегистрированы?
          <Link className='register__link' to='/signin'>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
