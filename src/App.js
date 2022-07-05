import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Home.jsx';
import MoviesPage from './pages/Movies/Movies';
import Profile from './pages/Profile/Profile';
import SavedMoviesPage from './pages/SavedMoviesPage/SavedMoviesPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='saved-movies' element={<SavedMoviesPage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
