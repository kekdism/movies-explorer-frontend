import { createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: (data) => {},
});

export const SavedMovies = createContext({
  savedMovies: null,
  setSavedMovies: (data) => {},
});
