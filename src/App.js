import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./pages/Home/Home.jsx";
import MoviesPage from "./pages/Movies/Movies";
import Profile from "./pages/Profile/Profile";
import SavedMoviesPage from "./pages/SavedMoviesPage/SavedMoviesPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthContext, SavedMovies } from "./utils/contexts";
import MainApi from "./utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      MainApi.getUser(token)
        .then((user) => setCurrentUser({ ...user, token }))
        .catch(console.error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <SavedMovies.Provider value={{ savedMovies, setSavedMovies }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="movies"
              element={
                <ProtectedRoute>
                  <MoviesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute>
                  <SavedMoviesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </SavedMovies.Provider>
    </AuthContext.Provider>
  );
}

export default App;
