import { useContext } from "react";
import { SavedMovies } from "../../utils/contexts";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ movieList, onSave, onDelete }) => {
  const { savedMovies } = useContext(SavedMovies);
  return (
    <section className="movies">
      <div className="movies__container">
        {movieList.map((movie) => (
          <Movie
            key={movie?.id ? movie.id : movie._id}
            movie={movie}
            onSave={onSave}
            onDelete={onDelete}
            isSaved={savedMovies?.some(
              (m) => m.movieId === movie.id || m.movieId === movie.movieId
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
