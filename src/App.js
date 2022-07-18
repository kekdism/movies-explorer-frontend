import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home.jsx";
import MoviesPage from "./pages/Movies/Movies";
import Profile from "./pages/Profile/Profile";
import SavedMoviesPage from "./pages/SavedMoviesPage/SavedMoviesPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthContext } from "./utils/authContext";
import MainApi from "./utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="saved-movies" element={<SavedMoviesPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
