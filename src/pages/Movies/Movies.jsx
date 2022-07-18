import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoreButton from "../../components/MoreButton/MoreButton";

import MoviesApi from "../../utils/MoviesApi";
import { useEffect } from "react";
import { useState } from "react";
import { checkNames, debounce, SHORTS_DURATION } from "../../utils/constants";
import { useRef } from "react";
import MainApi from "../../utils/MainApi";
import { useContext } from "react";
import { AuthContext, SavedMovies } from "../../utils/contexts";

const MoviesPage = () => {
  const { savedMovies, setSavedMovies } = useContext(SavedMovies);
  const { currentUser } = useContext(AuthContext);
  const [searchText, setSearchText] = useState("");
  const [isShortsIncluded, setIsShortsIncluded] = useState(true);
  const [foundMovies, setFoundMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState(0);
  const cardRenderSettings = useRef({ default: 12, row: 3 });

  const addCards = () => {
    if (showedMovies - cardRenderSettings.current.default < 0) {
      return (
        cardRenderSettings.current.default +
        cardRenderSettings.current.row -
        showedMovies
      );
    }
    if (
      (showedMovies - cardRenderSettings.current.default) %
        cardRenderSettings.current.row ===
      0
    ) {
      return cardRenderSettings.current.row;
    }
    const extraCards =
      showedMovies -
      cardRenderSettings.current.default -
      Math.trunc(
        (showedMovies - cardRenderSettings.current.default) /
          cardRenderSettings.current.row
      ) *
        cardRenderSettings.current.row;
    return cardRenderSettings.current.row * 2 - extraCards;
  };

  const handleMore = () => {
    setShowedMovies((s) => (s += addCards()));
  };

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleShortsChange = () => {
    setIsShortsIncluded((s) => !s);
  };

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const movies = await MoviesApi.getMovies();
      const filteredMovies = movies.filter((movie) => {
        const { nameRU, nameEN, duration } = movie;
        const isValidName = checkNames([nameRU, nameEN], searchText);
        const isValidDuration = !isShortsIncluded
          ? duration > SHORTS_DURATION
          : true;
        return isValidDuration && isValidName;
      });
      localStorage.setItem(
        "lastSearch",
        JSON.stringify({
          foundMovies: filteredMovies,
          searchText,
          isShortsIncluded,
        })
      );
      setFoundMovies(filteredMovies);
      setShowedMovies(cardRenderSettings.current.default);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMovieSave = async (movie) => {
    try {
      const newSave = await MainApi.saveMovie(movie, currentUser.token);
      setSavedMovies([...savedMovies, newSave]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      const movie = savedMovies.find((m) => m.movieId === id);
      await MainApi.deleteMovie(movie._id, currentUser.token);
      setSavedMovies(savedMovies.filter((m) => m !== movie));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("lastSearch")) {
      const { foundMovies, searchText, isShortsIncluded } = JSON.parse(
        localStorage.getItem("lastSearch")
      );
      setFoundMovies(foundMovies);
      setSearchText(searchText);
      setIsShortsIncluded(isShortsIncluded);
      setShowedMovies(cardRenderSettings.current.default);
    }
  }, []);

  useEffect(() => {
    if (!savedMovies) {
      MainApi.getMovies(currentUser?.token)
        .then(setSavedMovies)
        .catch(console.error);
    }
  }, [currentUser, setSavedMovies, savedMovies]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1280) {
        cardRenderSettings.current = { default: 12, row: 3 };
      } else if (window.innerWidth >= 768) {
        cardRenderSettings.current = { default: 8, row: 2 };
      } else if (window.innerWidth <= 480) {
        cardRenderSettings.current = { default: 5, row: 2 };
      }
      console.log(cardRenderSettings.current);
    };
    handleWindowResize();
    const debouncedResize = debounce(handleWindowResize, 500);
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);
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
      <Movies
        movieList={foundMovies.slice(0, showedMovies)}
        onSave={handleMovieSave}
        onDelete={handleDeleteMovie}
      />
      {foundMovies.length > showedMovies && (
        <MoreButton handleClick={handleMore} />
      )}
      <Footer />
    </>
  );
};

export default MoviesPage;
