import './Student.css';

const Student = () => {
  return (
    <section className='student'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__about'>
        <div className='student__container'>
          <div>
            <h3 className='student__name'>Вячеслав</h3>
            <p className='student__description'>Фронтенд-разработчик, 26 лет</p>
            <p className='student__summary'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>

          <ul className='student__soc'>
            <li className='student__link'>Facebook</li>
            <li className='student__link'>Github</li>
          </ul>
        </div>
        <img
          className='student__photo'
          src='https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg'
          alt='Фотография'
        />
      </div>
      <p className='student__subtitle'>Портфолио</p>
      <ul className='student__portfolio'>
        <li className='student__portfolio-item'>
          <a className='student__portfolio-link' href='#'>
            Статичный сайт
          </a>
        </li>
        <li className='student__portfolio-item'>
          <a className='student__portfolio-link' href='#'>
            Адаптивный сайт
          </a>
        </li>
        <li className='student__portfolio-item'>
          <a className='student__portfolio-link' href='#'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Student;
