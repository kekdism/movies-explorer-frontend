import { useState } from "react";
import { useLocation } from "react-router-dom";
import { formatDuration, MOVIE_URL } from "../../utils/constants";
import MainApi from "../../utils/MainApi";
import DeleteMovieIcon from "../Icons/DeleteMovieIcon";
import SaveIcon from "../Icons/SaveIcon";
import "./Movie.css";

const Movie = ({ movie, onSave, onDelete }) => {
  const { nameRU, duration, image } = movie;
  const { name, url } = image;
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();

  const handleSave = async () => {
    try {
      if (!isSaved) {
        const {
          country,
          director,
          duration,
          year,
          description,
          image,
          trailerLink,
          id: movieId,
          nameRU,
          nameEN,
        } = movie;

        await onSave({
          country,
          director,
          duration,
          year,
          description,
          image: `${MOVIE_URL}${url}`,
          thumbnail: `${MOVIE_URL}${image?.formats?.thumbnail?.url}`,
          trailerLink,
          movieId,
          nameRU,
          nameEN,
        });
        setIsSaved(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="movie">
      <div className="movie__header">
        <div className="movie__info">
          <h3 className="movie__title">{nameRU}</h3>
          <p className="movie__time">{formatDuration(duration)}</p>
        </div>
        <button className="movie__save" type="button" onClick={handleSave}>
          {pathname !== "/saved-movies" ? (
            <SaveIcon isSaved={isSaved} />
          ) : (
            <DeleteMovieIcon />
          )}
        </button>
      </div>
      <img
        className="movie__image"
        src={image?.url ? `${MOVIE_URL}${url}` : image}
        alt={name}
      />
    </article>
  );
};

export default Movie;
