import { MOVIE_URL } from "./constants";

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async getMovies() {
    const res = await fetch(`${this._baseUrl}/beatfilm-movies`);
    return this._checkRes(res);
  }

  _checkRes(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка : ${res.status}`));
    }
    return res.json();
  }
}

export default new MoviesApi(MOVIE_URL);
