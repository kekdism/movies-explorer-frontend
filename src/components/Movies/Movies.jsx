import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = () => {
  return (
    <section className='movies'>
      <div className='movies__container'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
      <button className='movies__more' type='button'>
        Ещё
      </button>
    </section>
  );
};

export default Movies;
