import FindIconButton from "../Icons/FindIconButton";
import MagnifierIcon from "../Icons/MagnifierIcon";
import Switch from "../Switch/Switch";
import "./SearchBar.css";

const SearchBar = ({
  searchText,
  isShortsIncluded,
  changeSearchText,
  changeShortsIncluded,
  onSearch,
}) => {
  return (
    <section className="search">
      <form className="search__box" onSubmit={onSearch}>
        <div className="search__bar">
          <div className="search__icon">
            <MagnifierIcon />
          </div>
          <input
            className="search__input"
            placeholder="Фильм"
            value={searchText}
            onChange={changeSearchText}
          />
          <button className="search__find" type="submit">
            <FindIconButton />
          </button>
        </div>
        <label className="search__filter">
          <Switch
            isShortsIncluded={isShortsIncluded}
            changeShortsIncluded={changeShortsIncluded}
          />
          Короткометражки
        </label>
      </form>
    </section>
  );
};

export default SearchBar;
