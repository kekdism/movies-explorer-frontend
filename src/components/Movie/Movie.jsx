import SaveIcon from '../Icons/SaveIcon';
import './Movie.css';

const Movie = () => {
  return (
    <article className='movie'>
      <div className='movie__header'>
        <div className='movie__info'>
          <h3 className='movie__title'>33 слова о дизайне</h3>
          <p className='movie__time'>1ч 47м</p>
        </div>
        <button className='movie__save' type='button'>
          <SaveIcon />
        </button>
      </div>
      <img
        className='movie__image'
        src='https://www.vzsar.ru/i/gallery/2021/12/64387_1640629710_1_original.jpg'
        alt='33 слова о дизайне'
      />
    </article>
  );
};

export default Movie;
