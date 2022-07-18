import { BASE_URL } from "./constants.js";

class MainApi {
  constructor(url) {
    this.BASE_URL = url;
  }

  setHeaders(token = "") {
    const headers = new Map();
    headers.set("Content-Type", "application/json");
    token && headers.set("Authorization", `Bearer ${token}`);
    return Object.fromEntries(headers);
  }

  async _checkStatus(response) {
    if (!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }
    return await response.json();
  }
  async register(data) {
    const response = await fetch(`${this.BASE_URL}/signup`, {
      method: "POST",
      headers: this.setHeaders(),
      body: JSON.stringify(data),
    });
    return this._checkStatus(response);
  }

  async login(data) {
    const response = await fetch(`${this.BASE_URL}/signin`, {
      method: "POST",
      headers: this.setHeaders(),
      body: JSON.stringify(data),
    });
    return this._checkStatus(response);
  }

  async getUser(token) {
    const response = await fetch(`${this.BASE_URL}/users/me`, {
      method: "GET",
      headers: this.setHeaders(token),
    });
    return this._checkStatus(response);
  }

  async updateUser(data, token) {
    const response = await fetch(`${this.BASE_URL}/users/me`, {
      method: "PATCH",
      headers: this.setHeaders(token),
      body: JSON.stringify(data),
    });
    return this._checkStatus(response);
  }

  async getMovies(token) {
    const response = await fetch(`${this.BASE_URL}/movies`, {
      method: "GET",
      headers: this.setHeaders(token),
    });
    return this._checkStatus(response);
  }

  async saveMovie(data, token) {
    const response = await fetch(`${this.BASE_URL}/movies`, {
      method: "POST",
      headers: this.setHeaders(token),
      body: JSON.stringify(data),
    });
    return this._checkStatus(response);
  }

  async deleteMovie(id, token) {
    const response = await fetch(`${this.BASE_URL}/${id}`, {
      method: "DELETE",
      headers: this.setHeaders(token),
    });
    return this._checkStatus(response);
  }
}

export default new MainApi(BASE_URL);
