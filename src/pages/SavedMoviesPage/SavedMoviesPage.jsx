import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext } from "../../utils/authContext";
import { checkNames, SHORTS_DURATION } from "../../utils/constants";
import MainApi from "../../utils/MainApi";

const SavedMoviesPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [userMovies, setUserMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isShortsIncluded, setIsShortsIncluded] = useState(true);

  useEffect(() => {
    MainApi.getMovies(currentUser?.token)
      .then((movies) => {
        setUserMovies(movies);
        setFilteredMovies(movies);
      })
      .catch(console.error);
  }, [currentUser]);

  const handleShortsChange = () => {
    setIsShortsIncluded((s) => !s);
  };

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSearch = () => {
    const filtered = userMovies.filter((movie) => {
      const { nameRU, nameEN, duration } = movie;
      const isValidName = checkNames([nameRU, nameEN], searchText);
      const isValidDuration = !isShortsIncluded
        ? duration > SHORTS_DURATION
        : true;
      return isValidDuration && isValidName;
    });
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Header />
      <SearchBar
        searchText={searchText}
        isShortsIncluded={isShortsIncluded}
        changeSearchText={handleSearchTextChange}
        changeShortsIncluded={handleShortsChange}
        onSearch={handleSearch}
      />
      <Movies movieList={filteredMovies} />
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
