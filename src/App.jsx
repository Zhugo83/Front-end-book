// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import BookForm from './pages/BookForm';
import BookEdit from './pages/BookEdit';
import BookDetail from './pages/BookDetail';
import AuthorList from './pages/AuthorList';
import AuthorForm from './pages/AuthorForm';
import AuthorEdit from './pages/AuthorEdit';
import AuthorDetail from './pages/AuthorDetail';
import PrivateRoute from './components/PrivateRoute';
import { isAuthenticated } from './services/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<PrivateRoute><BookList /></PrivateRoute>} />
          <Route path="/books/add" element={<PrivateRoute><BookForm /></PrivateRoute>} />
          <Route path="/books/:id" element={<PrivateRoute><BookDetail /></PrivateRoute>} />
          <Route path="/books/edit/:id" element={<PrivateRoute><BookEdit /></PrivateRoute>} />
          <Route path="/authors" element={<PrivateRoute><AuthorList /></PrivateRoute>} />
          <Route path="/authors/add" element={<PrivateRoute><AuthorForm /></PrivateRoute>} />
          <Route path="/authors/:id" element={<PrivateRoute><AuthorDetail /></PrivateRoute>} />
          <Route path="/authors/edit/:id" element={<PrivateRoute><AuthorEdit /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
