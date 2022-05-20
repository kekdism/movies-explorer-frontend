import './About.css';

const About = () => {
  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__description'>
        <div>
          <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about__caption'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности&nbsp;и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className='about__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__caption'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать,&nbsp;чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about__graph'>
        <div>
          <p className='about__week'>1 неделя</p>
          <p className='about__week-name'>Back-end</p>
        </div>
        <div>
          <p className='about__weeks'>4 недели</p>
          <p className='about__week-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default About;
