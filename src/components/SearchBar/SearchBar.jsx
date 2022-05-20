import FindIconButton from '../Icons/FindIconButton';
import MagnifierIcon from '../Icons/MagnifierIcon';
import Switch from '../Switch/Switch';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <section className='search'>
      <div className='search__box'>
        <div className='search__bar'>
          <div className='search__icon'>
            <MagnifierIcon />
          </div>
          <input className='search__input' placeholder='Фильм' />
          <button className='search__find'>
            <FindIconButton />
          </button>
        </div>
        <label className='search__filter'>
          <Switch />
          Короткометражки
        </label>
      </div>
    </section>
  );
};

export default SearchBar;
