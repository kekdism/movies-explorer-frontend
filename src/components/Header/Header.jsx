import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../utils/contexts";
import AccountInfoLink from "../AccountInfoLink/AccountInfoLink";
import LogoIcon from "../Icons/LogoIcon";
import SideMenu from "../SideMenu/SideMenu";
import "./Header.css";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/">
        <LogoIcon color="var(--accent-color)" />
      </Link>

      {currentUser?._id && (
        <>
          <nav className="header__logged">
            <ul className="header__nav">
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `header__link ${isActive && "header__link_active"}`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `header__link ${isActive && "header__link_active"}`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <AccountInfoLink />
          </nav>
          <button
            className="header__menu-button"
            onClick={() => setIsMenuOpen((s) => !s)}
          ></button>
          <SideMenu
            isOpen={isMenuOpen}
            handleClose={() => setIsMenuOpen((s) => !s)}
          />
        </>
      )}
      {!currentUser?._id && (
        <nav className="header__unlogged">
          <ul className="header__auth">
            <li>
              <Link to="/signup" className="header__signup">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="header__signin">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
