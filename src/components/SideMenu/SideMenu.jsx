import { NavLink } from 'react-router-dom';
import AccountInfoLink from '../AccountInfoLink/AccountInfoLink';
import './SideMenu.css';

const SideMenu = ({ isOpen, handleClose }) => {
  return (
    <div className={isOpen ? 'menu menu_opened' : 'menu'}>
      <nav className='menu__nav'>
        <button className='menu__close' onClick={handleClose}></button>
        <ul className='menu__list'>
          <li>
            <NavLink
              to='/'
              className={({isActive}) =>
                `menu__link ${isActive && 'menu__link_active'}`
              }
              
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className={({isActive}) =>
                `menu__link ${isActive && 'menu__link_active'}`
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/saved-movies'
              className={({isActive}) =>
                `menu__link ${isActive && 'menu__link_active'}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <AccountInfoLink />
      </nav>
    </div>
  );
};

export default SideMenu;
