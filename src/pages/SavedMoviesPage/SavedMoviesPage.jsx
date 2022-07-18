import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext, SavedMovies } from "../../utils/contexts";
import { checkNames, SHORTS_DURATION } from "../../utils/constants";
import MainApi from "../../utils/MainApi";

const SavedMoviesPage = () => {
  const { currentUser } = useContext(AuthContext);

  const { savedMovies, setSavedMovies } = useContext(SavedMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isShortsIncluded, setIsShortsIncluded] = useState(true);

  useEffect(() => {
    if (!savedMovies) {
      MainApi.getMovies(currentUser?.token)
        .then((movies) => {
          setSavedMovies(movies);
          setFilteredMovies(movies);
        })
        .catch(console.error);
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [currentUser, setSavedMovies, savedMovies]);

  const handleShortsChange = () => {
    setIsShortsIncluded((s) => !s);
  };

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = savedMovies.filter((movie) => {
      const { nameRU, nameEN, duration } = movie;
      const isValidName = checkNames([nameRU, nameEN], searchText);
      const isValidDuration = !isShortsIncluded
        ? duration > SHORTS_DURATION
        : true;
      return isValidDuration && isValidName;
    });
    setFilteredMovies(filtered);
  };

  const handleDeleteMovie = async (id) => {
    try {
      console.log(id);
      const movie = savedMovies.find((m) => m.movieId === id);
      await MainApi.deleteMovie(movie._id, currentUser.token);
      setSavedMovies(savedMovies.filter((m) => m !== movie));
    } catch (err) {
      console.error(err);
    }
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
      <Movies movieList={filteredMovies} onDelete={handleDeleteMovie} />
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
