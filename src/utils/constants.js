export const { MOVIE_URL = "https://api.nomoreparties.co" } = process.env;
export const { REACT_APP_BASE_URL: BASE_URL = "http://localhost:5050" } =
  process.env;

export const SHORTS_DURATION = 40;

export const formatDuration = (minutes) => {
  const hours = Math.trunc(minutes / 60);
  const min = minutes - hours * 60;
  return `${hours && `${hours}ч `}${min}м`;
};

export const checkNames = (names, phrase) => {
  return names.some((n) => {
    if (!n) {
      return false;
    }
    return n.toLowerCase().includes(phrase.toLowerCase());
  });
};

export const debounce = (f, ms) => {
  let timer;
  return (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(f, ms, e);
  };
};
