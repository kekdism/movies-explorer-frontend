import { useState } from 'react';
import './AccountInfo.css';

const AccountInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className='account-info'>
      <h2 className='account-info__hello'>Привет, Виталий!</h2>
      <ul className='account-info__fields'>
        <li className='account-info__field'>
          <p className='account-info__key'>Имя</p>
          <input
            type='text'
            className='account-info__value'
            defaultValue='Виталий'
            disabled={!isEditing}
          />
        </li>
        <li className='account-info__field'>
          <p className='account-info__key'>E-mail</p>
          <input
            type='email'
            className='account-info__value'
            defaultValue='pochta@yandex.ru'
            disabled={!isEditing}
          />
        </li>
      </ul>
      <div className='account-info__buttons'>
        {!isEditing && (
          <>
            <button
              type='button'
              className='account-info__button'
              onClick={() => setIsEditing((s) => !s)}
            >
              Редактировать
            </button>
            <button
              type='button'
              className='account-info__button account-info__button_type_logout'
            >
              Выйти из аккаунта
            </button>
          </>
        )}
        {isEditing && (
          <>
            <p className='account-info__input-error'>
              При обновлении профиля произошла ошибка.
            </p>
            <button
              type='button'
              className='account-info__button account-info__button_type_save'
              onClick={() => setIsEditing((s) => !s)}
            >
              Сохранить
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default AccountInfo;
