export const { MOVIE_URL = "https://api.nomoreparties.co" } = process.env;
export const { BASE_URL = "http://localhost:5050" } = process.env;

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
