import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <section className='title'>
      <h1 className='title__text'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav>
        <ul className='title__nav'>
          <li>
            <a href='#' className='title__link'>
              О проекте
            </a>
          </li>
          <li>
            <a href='#' className='title__link'>
              Технологии
            </a>
          </li>
          <li>
            <a href='#' className='title__link'>
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Title;
