import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ movieList, onSave, onDelete }) => {
  return (
    <section className="movies">
      <div className="movies__container">
        {movieList.map((movie) => (
          <Movie
            key={movie?.id ? movie.id : movie._id}
            movie={movie}
            onSave={onSave}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
