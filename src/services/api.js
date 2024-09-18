// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllBooks = () => api.get('/books').then((res) => res.data);
export const getOneBook = (id) => api.get(`/books/${id}`).then((res) => res.data);
export const createBook = (book) => api.post('/books/add', book).then((res) => res.data);
export const updateBook = (id, book) => api.patch(`/books/update/${id}`, book).then((res) => res.data);
export const deleteBook = (id) => api.delete(`/books/delete/${id}`).then((res) => res.data);

export const getAllAuthors = () => api.get('/authors').then((res) => res.data);
export const getOneAuthor = (id) => api.get(`/authors/${id}`).then((res) => res.data);
export const createAuthor = (author) => api.post('/authors/add', author).then((res) => res.data);
export const updateAuthor = (id, author) => api.patch(`/authors/update/${id}`, author).then((res) => res.data);
export const deleteAuthor = (id) => api.delete(`/authors/delete/${id}`).then((res) => res.data);
